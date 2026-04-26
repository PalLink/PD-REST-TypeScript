import axios, { type AxiosInstance, AxiosError, isAxiosError } from 'axios';
import { PalDefenderApiError } from './errors.js';
import {
    GiveItem,
    GivePal,
    GivePalEgg,
    GiveProgressionRequest as GiveProgressionModel
} from './models.js';
import type {
    PalDefenderConfig,
    PalVersion,
    PalPlayer,
    PalGuild,
    PalPlayerPals,
    PalPlayerItems,
    PalPlayerTechs,
    PalPlayerProgression,
    PalActionResult,
    TechActionResult
} from './types.js';
import pkg from '../package.json' with { type: 'json' };

interface Serializable {
    _to_dict(): Record<string, any>;
}

export class PalDefenderClient {
    private session: AxiosInstance;
    private globalAbortController: AbortController;

    constructor(config: PalDefenderConfig & { timeout?: number, displayAddress?: string }) {
        const {
            host = '127.0.0.1',
            port = 17993,
            token = process.env.PAL_TOKEN,
            timeout = 30000,
            displayAddress
        } = config;

        if (!token || token.trim() === '') {
            throw new Error('PalDefenderClient Error: A valid authentication token is required.');
        }

        const normalizedBaseUrl = this._normalizeBaseUrl(host, port);
        this.globalAbortController = new AbortController();
        this.session = axios.create({
            baseURL: `${normalizedBaseUrl}/v1/pdapi`,
            timeout: timeout,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...(displayAddress && { 'DisplayAddress': displayAddress })
            },
            signal: this.globalAbortController.signal
        });
        this.start()
    }
    /**
     * Checks the npm registry for a newer version of the package.
     * @internal
     */
    private async _checkForUpdates(): Promise<void> {
        try {
            // Access the version through the default 'pkg' object
            const localVersion = pkg.version;
            console.log("PD REST CLIENT version: ", localVersion)
            const response = await axios.get('https://registry.npmjs.org/paldefender-rest-client/latest', {
                timeout: 2000
            });
            // if (!response) return;
            const latestVersion = response.data.version;

            if (latestVersion !== localVersion) {
                console.warn(
                    `\x1b[33m[PalDefender Warning]\x1b[0m A new version is available: ${latestVersion}\n` +
                    `Current version: ${localVersion}. Run 'npm update paldefender-client' to upgrade.`
                );
            }
        } catch {
            // Silently fail to ensure bot startup isn't blocked 
        }
    }
    public close(): void {
        console.log("PalDefenderClient: Stopping active requests.");
        this.globalAbortController.abort();
    }

    public async start(): Promise<this> {
        await this._checkForUpdates()
        console.log("PalDefenderClient: Ready.");
        return this;
    }

    public exit(): void {
        return this.close();
    }

    private _normalizeBaseUrl(host: string, port: number): string {
        let url = host.replace(/\/+$/, ""); // rstrip("/") [cite: 921]

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

    private _serializeEntry(value: any): any {
        // Check if the value implements our internal serialization method
        if (value && typeof value === 'object' && '_to_dict' in value) {
            return (value as Serializable)._to_dict();
        }
        return value;
    }

    private _technologyPayload(technology: string | string[]): string | string[] {
        if (typeof technology === 'string') {
            return technology;
        }
        if (Array.isArray(technology)) {
            return [...technology];
        }
        throw new TypeError("technology must be a string or a sequence of strings");
    }

    private async _request<T>(method: string, endpoint: string, data?: unknown): Promise<T> {
        try {
            const response = await this.session.request<T>({
                url: endpoint,
                method,
                data
            });
            if (!response) throw new Error("No response from server");
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
    async version(): Promise<PalVersion> { return this._request('GET', '/version'); }
    async guilds(): Promise<Record<string, PalGuild>> { return this._request('GET', '/guilds'); }
    async guild(guildId: string): Promise<PalGuild> {
        return this._request('GET', `/guild/${this._pathPart(guildId)}`);
    }
    /**
        * @deprecated This endpoint is currently non-functional in the PalDefender Beta.
        * Waiting for a server-side update from the mod author.
    */
    async players(): Promise<PalPlayer[]> { return this._request('GET', '/players'); }
    /**
        * @deprecated This endpoint is currently non-functional in the PalDefender Beta.
        * Waiting for a server-side update from the mod author.
    */
    async player(id: string): Promise<PalPlayer> {
        return this._request('GET', `/player/${this._pathPart(id)}`);
    }
    /**
        * @deprecated This endpoint is currently non-functional in the PalDefender Beta.
        * Waiting for a server-side update from the mod author.
    */
    async pals(id: string): Promise<PalPlayerPals> {
        return this._request('GET', `/pals/${this._pathPart(id)}`);
    }
    async items(id: string): Promise<PalPlayerItems> {
        return this._request('GET', `/items/${this._pathPart(id)}`);
    }
    async techs(id: string): Promise<PalPlayerTechs> {
        return this._request('GET', `/techs/${this._pathPart(id)}`);
    }
    async progression(id: string): Promise<PalPlayerProgression> {
        return this._request('GET', `/progression/${this._pathPart(id)}`);
    }

    /** POST Endpoints */
    async giveItems(id: string, items: (GiveItem | object)[]): Promise<PalActionResult> {
        const payload = { "Items": items.map(item => this._serializeEntry(item)) };
        return this._request('POST', `/give/items/${this._pathPart(id)}`, payload);
    }

    async givePals(id: string, pals: (GivePal | object)[]): Promise<PalActionResult> {
        const payload = { "Pals": pals.map(pal => this._serializeEntry(pal)) };
        return this._request('POST', `/give/pals/${this._pathPart(id)}`, payload);
    }

    async givePalTemplates(id: string, templates: string[]): Promise<PalActionResult> {
        return this._request('POST', `/give/paltemplate/${this._pathPart(id)}`, { "PalTemplates": [...templates] });
    }

    async givePalEggs(id: string, eggs: (GivePalEgg | object)[]): Promise<PalActionResult> {
        const payload = { "PalEggs": eggs.map(egg => this._serializeEntry(egg)) };
        return this._request('POST', `/give/paleggs/${this._pathPart(id)}`, payload);
    }

    async giveProgression(id: string, request: GiveProgressionModel | object): Promise<PalActionResult> {
        return this._request('POST', `/give/progression/${this._pathPart(id)}`, this._serializeEntry(request));
    }

    async learnTech(id: string, technology: string | string[]): Promise<TechActionResult> {
        return this._request('POST', `/learntech/${this._pathPart(id)}`, {
            "Technology": this._technologyPayload(technology)
        });
    }

    async forgetTech(id: string, technology: string | string[]): Promise<TechActionResult> {
        return this._request('POST', `/forgettech/${this._pathPart(id)}`, {
            "Technology": this._technologyPayload(technology)
        });
    }
}
export type palDefenderClient = typeof PalDefenderClient