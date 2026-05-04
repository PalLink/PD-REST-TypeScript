import axios, { type AxiosInstance, AxiosError, isAxiosError } from 'axios';
import { PalDefenderApiError } from './errors.js';
import {
    GiveProgressionRequest,
    VersionInfo,
    GuildsResponse,
    GuildDetail,
    PlayersResponse,
    PlayerInfo,
    PlayerPalsResponse,
    PlayerItemsResponse,
    PlayerTechsResponse,
    PlayerProgressionResponse,
} from './models.js';
import {
    ItemId,
    PalId,
    TechnologyId,
    getRecipeMaterials,
    type PalDefenderConfig,
    type PalEggId,
    type PalName
} from './pal_constants/index.js';
import type {
    PalActionResult,
    TechActionResult,
    PalVersion,
    PalPlayer,
    PalGuild,
    PalPlayerPals,
    PalPlayerItems,
    PalPlayerTechs,
    PalPlayerProgression
} from './types.js';
import pkg from '../package.json' with { type: 'json' };

interface Serializable {
    to_dict(): Record<string, unknown>;
}

export class PalDefenderClient {
    private session: AxiosInstance;
    private globalAbortController: AbortController;
    private baseUrl: string;

    constructor(config?: PalDefenderConfig) {
        const port = config?.port || parseInt(process.env.PD_PORT!, 10) || 17993,
            host = config?.host || process.env.PD_HOST || '127.0.0.1',
            token = config?.token || process.env.PD_TOKEN || '',
            timeout = config?.timeout || parseInt(process.env.TIMEOUT!, 10) || 30000,
            displayAddress = config?.displayAddress || process.env.DISPLAY_ADDRESS || ""

        if (!token || token.trim() === '') {
            throw new Error('PalDefenderClient Error: A valid authentication token is required.');
        }

        this.baseUrl = this._normalizeBaseUrl(host, port);
        this.globalAbortController = new AbortController();
        this.session = axios.create({
            baseURL: `${this.baseUrl}/v1/pdapi`,
            timeout: timeout,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...(displayAddress && { 'DisplayAddress': displayAddress })
            },
            signal: this.globalAbortController.signal
        });
    }

    /**
     * Checks the npm registry for a newer version of the package.
     * @internal
     */
    private async _checkForUpdates(): Promise<void> {
        try {
            const localVersion = pkg.version;
            const response = await axios.get<{ version: string }>('https://registry.npmjs.org/paldefender-rest-client/latest', {
                timeout: 2000
            });
            const latestVersion = response.data.version;

            if (latestVersion !== localVersion) {
                console.warn(
                    `\x1b[33m[PalDefender Warning]\x1b[0m A new version is available: ${latestVersion}\n` +
                    `Current version: ${localVersion}. Run 'npm update paldefender-rest-client' to upgrade.`
                );
            }
        } catch {
            // Silently fail
        }
    }

    public close(): void {
        this.globalAbortController.abort();
    }

    public async start(): Promise<this> {
        await this._checkForUpdates();
        return this;
    }

    private _normalizeBaseUrl(host: string, port: number): string {
        let url = host.replace(/\/+$/, "");
        if (!url.startsWith('http')) {
            url = `http://${url}`;
        }
        try {
            const urlObj = new URL(url);
            if (!urlObj.port) {
                urlObj.port = port.toString();
            }
            return urlObj.origin;
        } catch {
            return url;
        }
    }

    private _pathPart(value: string): string {
        return encodeURIComponent(value);
    }

    private _serializeEntry(value: unknown): unknown {
        if (value && typeof value === 'object' && 'to_dict' in value) {
            return (value as Serializable).to_dict();
        }
        return value;
    }

    private _resolvePalId(id: string): string {
        if (id in PalId) {
            return PalId[id as PalName];
        }
        return id;
    }

    private _resolveTechnologyId(id: string): string {
        if (id in TechnologyId) {
            return TechnologyId[id as keyof typeof TechnologyId];
        }
        return id;
    }

    private _resolveItemId(id: string): string {
        if (id in ItemId) {
            return ItemId[id as keyof typeof ItemId];
        }
        return id;
    }

    private async _request<T>(method: string, endpoint: string, data?: unknown): Promise<T> {
        try {
            const response = await this.session.request<T>({
                url: endpoint,
                method,
                data
            });
            return response.data;
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                const axiosError = error as AxiosError<{ Error?: string }>;
                const status = axiosError.response?.status ?? 0;
                const responseData = axiosError.response?.data;

                if (axiosError.code === 'ERR_CANCELED') {
                    throw new Error('PalDefenderClient: Request was cancelled by close().');
                }

                let message = `PalDefender API returned status ${status}`;
                if (responseData && typeof responseData === 'object' && 'Error' in responseData) {
                    message = `PalDefender API returned ${status}: ${JSON.stringify(responseData.Error)}`;
                } else if (typeof responseData === 'string' && responseData) {
                    message = `PalDefender API returned ${status}: ${responseData}`;
                }

                throw new PalDefenderApiError(message, {
                    statusCode: status,
                    method,
                    path: endpoint,
                    responseBody: responseData
                });
            }
            throw error;
        }
    }

    /** GET Endpoints */
    async getVersion(): Promise<VersionInfo> {
        return VersionInfo.from_dict(await this._request<PalVersion>('GET', '/version'));
    }

    async getGuilds(): Promise<GuildsResponse> {
        return GuildsResponse.from_dict(await this._request<Record<string, unknown>>('GET', '/guilds'));
    }

    async getGuild(guildId: string): Promise<GuildDetail> {
        return GuildDetail.from_dict(await this._request<PalGuild>('GET', `/guild/${this._pathPart(guildId)}`));
    }

    async getPlayers(): Promise<PlayersResponse> {
        return PlayersResponse.from_list(await this._request<PalPlayer[]>('GET', '/players'));
    }

    async getPlayer(id: string): Promise<PlayerInfo> {
        return PlayerInfo.from_dict(await this._request<PalPlayer>('GET', `/player/${this._pathPart(id)}`));
    }

    /**
     * Finds a single player by exact name match within the players array.
     */
    async findPlayersByPartialName(part: string): Promise<PlayerInfo[]> {
        const response = await this.getPlayers();

        // Access the 'players' array from the response object
        const playersArray = response?.players;

        if (!playersArray || !Array.isArray(playersArray) || playersArray.length === 0) {
            return [];
        }

        const searchLow = part.toLowerCase();
        const matches: PlayerInfo[] = [];

        for (const player of playersArray) {
            const playerName = player?.Name?.toLowerCase() ?? "";
            if (playerName.includes(searchLow)) {
                matches.push(player);
            }
        }

        return matches;
    }

    /**
     * Finds a single player by exact name match.
     */
    async findPlayerByName(name: string): Promise<PlayerInfo | undefined> {
        const response = await this.getPlayers();
        const playersArray = response?.players;

        if (!playersArray || !Array.isArray(playersArray)) {
            return undefined;
        }

        return playersArray.find(player => player?.Name === name);
    }

    async getPals(id: string): Promise<PlayerPalsResponse> {
        return PlayerPalsResponse.from_dict(await this._request<PalPlayerPals>('GET', `/pals/${this._pathPart(id)}`));
    }

    async getItems(id: string): Promise<PlayerItemsResponse> {
        return PlayerItemsResponse.from_dict(await this._request<PalPlayerItems>('GET', `/items/${this._pathPart(id)}`));
    }

    async getTechs(id: string): Promise<PlayerTechsResponse> {
        return PlayerTechsResponse.from_dict(await this._request<PalPlayerTechs>('GET', `/techs/${this._pathPart(id)}`));
    }

    async getProgression(id: string): Promise<PlayerProgressionResponse> {
        return PlayerProgressionResponse.from_dict(await this._request<PalPlayerProgression>('GET', `/progression/${this._pathPart(id)}`));
    }

    /** Aliases */
    async version(): Promise<VersionInfo> { return await this.getVersion(); }
    async guilds(): Promise<GuildsResponse> { return await this.getGuilds(); }
    async guild(guildId: string): Promise<GuildDetail> { return await this.getGuild(guildId); }
    async players(): Promise<PlayersResponse> { return await this.getPlayers(); }
    async player(id: string): Promise<PlayerInfo> { return await this.getPlayer(id); }
    async pals(id: string): Promise<PlayerPalsResponse> { return await this.getPals(id); }
    async items(id: string): Promise<PlayerItemsResponse> { return await this.getItems(id); }
    async techs(id: string): Promise<PlayerTechsResponse> { return await this.getTechs(id); }
    async progression(id: string): Promise<PlayerProgressionResponse> { return await this.getProgression(id); }

    /** POST Endpoints */
    async giveItems(
        id: string,
        items: (keyof typeof ItemId) | ((keyof typeof ItemId) | { ItemId: keyof typeof ItemId; Count: number })[]
    ): Promise<PalActionResult> {
        const inputArray = Array.isArray(items) ? items : [items];

        // 1. Resolve and Group
        const aggregated = inputArray.reduce((acc, item) => {
            const rawId = typeof item === 'string' ? item : item.ItemId;
            const count = typeof item === 'string' ? 1 : item.Count;

            // Resolve the ID immediately so duplicates like "Stone" and its internal ID merge
            const resolvedId = this._resolveItemId(rawId as string) || rawId;

            if (!acc[resolvedId]) {
                acc[resolvedId] = 0;
            }
            acc[resolvedId] += count;

            return acc;
        }, {} as Record<string, number>);

        // 2. Map to final API Payload
        const payload = {
            Items: Object.entries(aggregated).map(([ItemID, Count]) => ({
                ItemID,
                Count
            }))
        };

        return this._request<PalActionResult>('POST', `/give/items/${this._pathPart(id)}`, payload);
    }

    async givePals(
        id: string,
        pals:
            | PalName
            | typeof PalId[keyof typeof PalId] // Allows raw IDs like "Alpaca"
            | (
                | PalName
                | typeof PalId[keyof typeof PalId]
                | { PalName: PalName | typeof PalId[keyof typeof PalId]; Level: number }
            )[]
    ): Promise<PalActionResult> {
        const inputArray = Array.isArray(pals) ? pals : [pals];
        const normalized = inputArray.map(pal => {
            if (typeof pal === 'string') {
                return { PalName: pal, Level: 1 };
            }
            return pal;
        });

        const payload = {
            Pals: normalized.map(({ PalName, Level }) => ({
                PalID: this._resolvePalId(PalName as string),
                Level: Level
            }))
        };

        return this._request('POST', `/give/pals/${this._pathPart(id)}`, payload);
    }

    async givePalEggs(
        id: string,
        ...eggs: (
            | PalEggId
            | [PalEggId, PalName | string]
            | [PalEggId, PalName | string, number]
            | { EggID: PalEggId; PalName?: PalName | string; PalTemplate?: string; Level?: number }
        )[]
    ): Promise<PalActionResult> {
        // 1. Normalize the varied inputs into a consistent object structure
        const normalized = eggs.map(egg => {
            // Handle Tuple: ["Egg2", "Jetragon", 15] or ["Egg2", "Jetragon"]
            if (Array.isArray(egg)) {
                const [eggId, palNameOrId, level] = egg;
                return {
                    EggID: eggId,
                    PalName: palNameOrId,
                    Level: level ?? 1
                };
            }
            // Handle String: "Egg_Dark_01"
            if (typeof egg === 'string') {
                return { EggID: egg };
            }
            // Handle Object: { EggID: "...", ... }
            return egg;
        });

        // 2. Map to API Payload with ID resolution
        const payload = {
            PalEggs: normalized.map(({ PalName, ...rest }) => ({
                ...rest,
                ...(PalName && { PalID: this._resolvePalId(PalName as string) })
            }))
        };

        return this._request('POST', `/give/paleggs/${this._pathPart(id)}`, payload);
    }

    async giveRecipeMaterials(id: string, product: keyof typeof ItemId | string, quantity: number = 1): Promise<PalActionResult> {
        if (quantity <= 0) throw new Error("quantity must be a positive integer");
        const prodId = (ItemId as any)[product] || product;
        const materials = getRecipeMaterials(prodId as ItemId);
        if (!materials) throw new Error(`No recipe found for product ${product}`);
        const items: { ItemId: keyof typeof ItemId, Count: number }[] = [];
        for (const [matId, count] of Object.entries(materials)) {
            items.push({ ItemId: this._resolveItemId(matId) as keyof typeof ItemId, Count: count as number });
        }
        return this.giveItems(id, items);
    }

    async giveProgression(id: string, request?: GiveProgressionRequest | Record<string, unknown>, options?: {
        exp?: number,
        lifmunks?: number,
        technologyPoints?: number,
        ancientTechnologyPoints?: number
    }): Promise<PalActionResult> {
        const payload = this._normalizeProgressionRequest(request, options);
        return this._request<PalActionResult>('POST', `/give/progression/${this._pathPart(id)}`, this._serializeEntry(payload));
    }

    async learnTech(
        id: string,
        techs: (keyof typeof TechnologyId | string) | (keyof typeof TechnologyId | string)[]
    ): Promise<TechActionResult> {
        const techArray = Array.isArray(techs) ? techs : [techs];
        const processed = this._getProcessedTechs(techArray);

        return this._request<TechActionResult>('POST', `/learntech/${this._pathPart(id)}`, {
            "Technology": processed.length === 1 ? processed[0] : processed
        });
    }

    async forgetTech(
        id: string,
        techs: (keyof typeof TechnologyId | string) | (keyof typeof TechnologyId | string)[]
    ): Promise<TechActionResult> {
        const techArray = Array.isArray(techs) ? techs : [techs];
        const processed = this._getProcessedTechs(techArray);

        return this._request<TechActionResult>('POST', `/forgettech/${this._pathPart(id)}`, {
            "Technology": processed.length === 1 ? processed[0] : processed
        });
    }

    async deleteBase(baseCampId: string): Promise<PalActionResult> {
        return this._request<PalActionResult>('POST', `/deletebase/${this._pathPart(baseCampId)}`);
    }

    /** Normalization Helpers */
    private _normalizeProgressionRequest(request?: GiveProgressionRequest | Record<string, unknown>, options?: {
        exp?: number,
        lifmunks?: number,
        technologyPoints?: number,
        ancientTechnologyPoints?: number
    }): GiveProgressionRequest | Record<string, unknown> {
        const hasOptions = options && Object.values(options).some(v => v !== undefined);
        if (request && hasOptions) throw new Error("pass either request or progression keyword arguments, not both");
        if (request) return request;
        return new GiveProgressionRequest(options?.exp, options?.lifmunks, options?.technologyPoints, options?.ancientTechnologyPoints);
    }

    private _getProcessedTechs(techs: (keyof typeof TechnologyId | string)[]): string[] {
        // 1. Check if "All" is anywhere in the input array (as a key or raw string)
        if (techs.includes("All" as any) || techs.includes(TechnologyId.All)) {
            return Object.entries(TechnologyId)
                .filter(([key]) => key !== "All")
                .map(([_, value]) => value);
        }

        // 2. Resolve specific IDs (maps keys to values, or returns raw string if no key found)
        return techs.map(t => this._resolveTechnologyId(t as string));
    }
}

export * from "./pal_constants/index.js";