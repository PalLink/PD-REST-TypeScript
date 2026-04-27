import axios, { type AxiosInstance, AxiosError, isAxiosError } from 'axios';
import { PalDefenderApiError } from './errors.js';
import {
    GiveItem,
    GivePal,
    GivePalEgg,
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

export type JsonValue = Record<string, unknown> | unknown[] | string | number | boolean | null;
export type ItemInput = string | [string, number] | GiveItem | Record<string, unknown>;
export type PalInput = string | keyof typeof PalId | [string | keyof typeof PalId, number] | GivePal | Record<string, unknown>;
export type PalEggTupleInput = [string, string | keyof typeof PalId] | [string, string | keyof typeof PalId, number];
export type PalEggInput = GivePalEgg | Record<string, unknown> | PalEggTupleInput;
export type TechnologyInput = string | keyof typeof TechnologyId | (string | keyof typeof TechnologyId)[];

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
                    `Current version: ${localVersion}. Run 'npm update paldefender-client' to upgrade.`
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

    /**
     * Internal helper to resolve PalNames to internal PalIDs
     */
    private _resolvePalId(id: string): string {
        if (id in PalId) {
            return PalId[id as PalName];
        }
        return id; // Fallback for raw IDs or custom templates
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
    async giveItems(id: string, ...items: ItemInput[]): Promise<PalActionResult> {
        const normalized = this._normalizeItemInputs(items);
        const payload = { "Items": normalized.map(item => this._serializeEntry(item)) };
        return this._request<PalActionResult>('POST', `/give/items/${this._pathPart(id)}`, payload);
    }

    async givePals(id: string, pals: { PalName: PalName; Level: number }[]): Promise<PalActionResult> {
        const payload = {
            Pals: pals.map(({ PalName, ...rest }) => ({
                ...rest,
                PalID: this._resolvePalId(PalName)
            }))
        };
        return this._request('POST', `/give/pals/${this._pathPart(id)}`, payload);
    }

    async givePalEggs(id: string, eggs: { EggID: PalEggId; PalName?: PalName; PalTemplate?: string; Level?: number }[]): Promise<PalActionResult> {
        const payload = {
            PalEggs: eggs.map(({ PalName, ...rest }) => ({
                ...rest,
                ...(PalName && { PalID: this._resolvePalId(PalName) })
            }))
        };
        return this._request('POST', `/give/paleggs/${this._pathPart(id)}`, payload);
    }

    async giveRecipeMaterials(id: string, product: keyof typeof ItemId | string, quantity: number = 1): Promise<PalActionResult> {
        if (quantity <= 0) throw new Error("quantity must be a positive integer");
        const prodId = (ItemId as any)[product] || product;
        const materials = getRecipeMaterials(prodId as ItemId);
        if (!materials) throw new Error(`No recipe found for product ${product}`);

        const items: GiveItem[] = [];
        for (const [matId, count] of Object.entries(materials)) {
            items.push(new GiveItem(matId, (count as number) * quantity));
        }
        return this.giveItems(id, ...items);
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

    async learnTech(id: string, ...technology: TechnologyInput[]): Promise<TechActionResult> {
        return this._request<TechActionResult>('POST', `/learntech/${this._pathPart(id)}`, {
            "Technology": this._technologyPayload(technology)
        });
    }

    async forgetTech(id: string, ...technology: TechnologyInput[]): Promise<TechActionResult> {
        return this._request<TechActionResult>('POST', `/forgettech/${this._pathPart(id)}`, {
            "Technology": this._technologyPayload(technology)
        });
    }

    async deleteBase(baseCampId: string): Promise<PalActionResult> {
        return this._request<PalActionResult>('POST', `/deletebase/${this._pathPart(baseCampId)}`);
    }

    /** Normalization Helpers */
    private _normalizeItemInputs(values: ItemInput[]): (GiveItem | Record<string, unknown>)[] {
        const flattened = this._flattenSingleSequence(values, (v) => Array.isArray(v) && v.length === 2 && typeof v[0] === 'string' && typeof v[1] === 'number');
        const counts: Record<string, number> = {};
        const passthrough: Record<string, unknown>[] = [];

        for (const value of flattened) {
            if (typeof value === 'string') {
                counts[value] = (counts[value] || 0) + 1;
            } else if (value instanceof GiveItem) {
                counts[value.ItemID] = (counts[value.ItemID] || 0) + value.Count;
            } else if (Array.isArray(value)) {
                const [itemId, count] = value as [string, number];
                counts[itemId] = (counts[itemId] || 0) + count;
            } else if (typeof value === 'object' && value !== null) {
                const v = value as Record<string, unknown>;
                if ('ItemID' in v && 'Count' in v) {
                    counts[v.ItemID as string] = (counts[v.ItemID as string] || 0) + (v.Count as number);
                } else {
                    passthrough.push(v);
                }
            }
        }

        const normalized: (GiveItem | Record<string, unknown>)[] = Object.entries(counts).map(([id, count]) => new GiveItem(id, count));
        normalized.push(...passthrough);
        if (normalized.length === 0) throw new Error("at least one item must be provided");
        return normalized;
    }

    private _normalizePalInputs(values: PalInput[]): (GivePal | Record<string, unknown>)[] {
        const flattened = this._flattenSingleSequence(values, (v) => Array.isArray(v) && v.length === 2 && typeof v[1] === 'number');
        const normalized: (GivePal | Record<string, unknown>)[] = [];

        for (const value of flattened) {
            if (typeof value === 'string') {
                const palId = (PalId as any)[value] || value;
                normalized.push(new GivePal(palId as string, 1));
            } else if (value instanceof GivePal) {
                normalized.push(value);
            } else if (Array.isArray(value)) {
                let [palId, level] = value as [string, number];
                palId = (PalId as any)[palId] || palId;
                normalized.push(new GivePal(palId as string, level));
            } else if (typeof value === 'object' && value !== null) {
                const v = value as Record<string, unknown>;
                if ('PalID' in v && 'Level' in v) {
                    const palId = (PalId as any)[v.PalID as string] || v.PalID;
                    normalized.push(new GivePal(palId as string, v.Level as number));
                } else {
                    normalized.push(v);
                }
            }
        }
        if (normalized.length === 0) throw new Error("at least one pal must be provided");
        return normalized;
    }

    private _normalizePalEggInputs(values: PalEggInput[]): (GivePalEgg | Record<string, unknown>)[] {
        const flattened = this._flattenSingleSequence(values, (v) => Array.isArray(v) && (v.length === 2 || v.length === 3));
        const normalized: (GivePalEgg | Record<string, unknown>)[] = [];

        for (const value of flattened) {
            if (value instanceof GivePalEgg) {
                normalized.push(value);
            } else if (Array.isArray(value)) {
                const [eggId, palOrTemplate, level] = value as [string, string, number?];
                const palId = (PalId as any)[palOrTemplate];
                if (palId) {
                    normalized.push(new GivePalEgg(eggId, palId as string, undefined, level));
                } else if (typeof palOrTemplate === 'string' && (palOrTemplate.endsWith('.json') || !this._isKnownPalId(palOrTemplate))) {
                    normalized.push(new GivePalEgg(eggId, undefined, palOrTemplate, level));
                } else {
                    normalized.push(new GivePalEgg(eggId, palOrTemplate, undefined, level));
                }
            } else if (typeof value === 'object' && value !== null) {
                const v = value as Record<string, unknown>;
                if ('EggID' in v) {
                    const palId = (PalId as any)[v.PalID as string] || v.PalID;
                    normalized.push(new GivePalEgg(v.EggID as string, palId as string, v.PalTemplate as string, v.Level as number));
                } else {
                    normalized.push(v);
                }
            }
        }
        if (normalized.length === 0) throw new Error("at least one pal egg must be provided");
        return normalized;
    }

    private _normalizeStringInputs(values: (string | string[])[], label: string): string[] {
        if (values.length === 1 && Array.isArray(values[0])) {
            return values[0];
        }
        if (values.length === 0) throw new Error(`at least one ${label.replace(/s$/, '')} must be provided`);
        return values as string[];
    }

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

    private _isKnownPalId(value: string): boolean {
        return Object.values(PalId).includes(value as any);
    }

    private _flattenSingleSequence(values: any[], tuplePredicate: (v: any) => boolean): any[] {
        if (values.length === 1 && Array.isArray(values[0]) && !tuplePredicate(values[0])) {
            return values[0];
        }
        return values;
    }

    private _technologyPayload(technology: TechnologyInput[]): string | string[] {
        const flattened = this._flattenSingleSequence(technology, () => false);
        const normalized: string[] = flattened
            .map(v => (typeof v === 'string' && (TechnologyId as any)[v]) || v)
            .filter((v): v is string => typeof v === 'string');

        if (normalized.length === 0) throw new Error("at least one technology must be provided");
        if (normalized.length === 1) return normalized[0]!;
        if (normalized.includes("All")) throw new Error('"All" is only valid when passed by itself');
        return normalized;
    }
}

export * from "./pal_constants/index.js";