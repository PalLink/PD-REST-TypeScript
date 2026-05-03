import type {
    PalVersion,
    PalPosition,
    PalPlayer,
    PalCamp,
    PalGuild,
    PalGuildStorage,
    PalInstanceData,
    PalBaseCampData,
    PalPlayerPals,
    PalItemSlot,
    PalInventorySection,
    PalPlayerItems,
    PalPlayerTechs,
    PalProgressionPlayer,
    PalProgressionCurrencies,
    PalProgressionBosses,
    PalProgressionCaptures,
    PalProgressionActivities,
    PalPlayerProgression
} from './types.js';

/**
 * Helper models for PalDefender API requests and responses.
 * Converted from Python dataclasses.
 */

/** @internal */
export function modelToDict(value: unknown): unknown {
    if (value === null || value === undefined) return value;
    if (typeof value === 'object') {
        if ('to_dict' in value && typeof (value as { to_dict: unknown }).to_dict === 'function') {
            return (value as { to_dict: () => unknown }).to_dict();
        }
        if (Array.isArray(value)) return (value as unknown[]).map(modelToDict);
        const res: Record<string, unknown> = {};
        for (const key of Object.keys(value as object)) {
            if (key === 'raw') continue;
            res[key] = modelToDict((value as Record<string, unknown>)[key]);
        }
        return res;
    }
    return value;
}

/** @internal */
function ensureArray<T>(value: unknown): T[] {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'object') return Object.values(value) as T[];
    return [];
}

export class GiveItem {
    constructor(public ItemID: string, public Count: number) {
        if (!ItemID) throw new Error("ItemID must not be empty");
        if (Count <= 0) throw new Error("Count must be a positive integer");
    }

    to_dict(): Record<string, unknown> {
        return { "ItemID": this.ItemID, "Count": this.Count };
    }

    /** @internal */
    _to_dict(): Record<string, unknown> { return this.to_dict(); }
}

export class GivePal {
    constructor(public PalID: string, public Level: number) {
        if (!PalID) throw new Error("PalID must not be empty");
        if (Level <= 0) throw new Error("Level must be a positive integer");
    }

    to_dict(): Record<string, unknown> {
        return { "PalID": this.PalID, "Level": this.Level };
    }

    /** @internal */
    _to_dict(): Record<string, unknown> { return this.to_dict(); }
}

export class GivePalEgg {
    constructor(
        public EggID: string,
        public PalID?: string,
        public PalTemplate?: string,
        public Level?: number
    ) {
        if (!EggID) throw new Error("EggID must not be empty");
        if ((PalID === undefined) === (PalTemplate === undefined)) {
            throw new Error("exactly one of PalID or PalTemplate must be provided");
        }
        if (Level !== undefined && Level <= 0) {
            throw new Error("Level must be a positive integer when provided");
        }
    }

    to_dict(): Record<string, unknown> {
        const payload: Record<string, unknown> = { "EggID": this.EggID };
        if (this.PalID !== undefined) payload["PalID"] = this.PalID;
        if (this.PalTemplate !== undefined) payload["PalTemplate"] = this.PalTemplate;
        if (this.Level !== undefined) payload["Level"] = this.Level;
        return payload;
    }

    /** @internal */
    _to_dict(): Record<string, unknown> { return this.to_dict(); }
}

export class GiveProgressionRequest {
    constructor(
        public EXP?: number,
        public Lifmunks?: number,
        public TechnologyPoints?: number,
        public AncientTechnologyPoints?: number
    ) {
        if (EXP === undefined && Lifmunks === undefined && TechnologyPoints === undefined && AncientTechnologyPoints === undefined) {
            throw new Error("at least one progression field must be provided");
        }
        const fields = { EXP, Lifmunks, TechnologyPoints, AncientTechnologyPoints };
        for (const [name, val] of Object.entries(fields)) {
            if (val !== undefined && val <= 0) throw new Error(`${name} must be a positive integer`);
        }
    }

    to_dict(): Record<string, unknown> {
        const payload: Record<string, unknown> = {};
        if (this.EXP !== undefined) payload["EXP"] = this.EXP;
        if (this.Lifmunks !== undefined) payload["Lifmunks"] = this.Lifmunks;
        if (this.TechnologyPoints !== undefined) payload["TechnologyPoints"] = this.TechnologyPoints;
        if (this.AncientTechnologyPoints !== undefined) payload["AncientTechnologyPoints"] = this.AncientTechnologyPoints;
        return payload;
    }

    /** @internal */
    _to_dict(): Record<string, unknown> { return this.to_dict(); }
}

export class VersionInfo {
    constructor(
        public major: number,
        public minor: number,
        public patch: number,
        public build: number,
        public version_str: string,
        public version_str_long: string,
        public beta: boolean
    ) {}

    static from_dict(data: PalVersion): VersionInfo {
        return new VersionInfo(
            data.major,
            data.minor,
            data.patch,
            data.build,
            data.version_str,
            data.version_str_long,
            data.beta
        );
    }
}

export class Position {
    constructor(
        public X: number | null = null,
        public Y: number | null = null,
        public Z: number | null = null,
        public raw: unknown = null
    ) {}

    static from_value(value: unknown): Position {
        if (value && typeof value === 'object') {
            const v = value as Record<string, unknown>;
            return new Position(
                (v.X as number) ?? (v.x as number) ?? null,
                (v.Y as number) ?? (v.y as number) ?? null,
                (v.Z as number) ?? (v.z as number) ?? null,
                value
            );
        }
        return new Position(null, null, null, value);
    }

    to_dict(): PalPosition {
        return { X: this.X, Y: this.Y, Z: this.Z };
    }
}

export class GuildCampSummary {
    constructor(
        public id: string,
        public world_pos: Position,
        public map_pos: Position
    ) {}

    static from_dict(data: Record<string, unknown>): GuildCampSummary {
        return new GuildCampSummary(
            String(data.id ?? ""),
            Position.from_value(data.world_pos),
            Position.from_value(data.map_pos)
        );
    }
}

export class GuildSummary {
    constructor(
        public id: string,
        public name: string,
        public Level: number | null,
        public admin: string | null,
        public camp_count: number | null,
        public camps: GuildCampSummary[],
        public member_count: number | null,
        public members: string[]
    ) {}

    static from_dict(guildId: string, data: Record<string, unknown>): GuildSummary {
        return new GuildSummary(
            guildId,
            String(data.name ?? ""),
            (data.Level as number) ?? null,
            (data.admin as string) ?? null,
            (data.camp_count as number) ?? null,
            ensureArray<Record<string, unknown>>(data.camps).map((item) => GuildCampSummary.from_dict(item)),
            (data.member_count as number) ?? null,
            ensureArray<unknown>(data.members).map((item) => String(item))
        );
    }
}

export class GuildsResponse {
    constructor(public guilds: Record<string, GuildSummary>) {}

    static from_dict(data: Record<string, unknown>): GuildsResponse {
        const guilds: Record<string, GuildSummary> = {};
        for (const [guildId, value] of Object.entries(data)) {
            guilds[guildId] = GuildSummary.from_dict(guildId, value as Record<string, unknown>);
        }
        return new GuildsResponse(guilds);
    }
}

export class GuildMember {
    constructor(
        public player_uid: string,
        public player_name: string,
        public status: string
    ) {}

    static from_dict(data: Record<string, unknown>): GuildMember {
        const obj = data as Record<string, unknown>;
        return new GuildMember(
            String(obj.player_uid ?? obj.PlayerUID ?? ""),
            String(obj.player_name ?? obj.Name ?? "Unknown Player"),
            String(obj.status ?? "Offline")
        );
    }
}

export class GuildCampDetail {
    constructor(
        public id: string,
        public world_pos: Position,
        public map_pos: Position,
        public level: number | null,
        public state: string | null,
        public pals: Record<string, unknown>[],
        public buildings: Record<string, unknown>[]
    ) {}

    static from_dict(data: PalCamp): GuildCampDetail {
        return new GuildCampDetail(
            String(data.id ?? ""),
            Position.from_value(data.world_pos),
            Position.from_value(data.map_pos),
            data.level ?? null,
            data.state ?? null,
            ensureArray(data.pals),
            ensureArray(data.buildings)
        );
    }
}

export class GuildStorage {
    constructor(
        public container_id: string | null,
        public current: number | null,
        public max: number | null,
        public slots: Record<string, Record<string, unknown>>
    ) {}

    static from_dict(data: PalGuildStorage): GuildStorage {
        return new GuildStorage(
            data.container_id,
            data.current,
            data.max,
            data.slots
        );
    }
}

export class GuildDetail {
    constructor(
        public name: string,
        public Level: number | null,
        public admin: string | null,
        public member_count: number | null,
        public members: GuildMember[],
        public camp_count: number | null,
        public camps: GuildCampDetail[],
        public items: GuildStorage[],
        public expeditions: unknown,
        public laboratory: unknown,
        public raw: PalGuild
    ) {}

    static from_dict(data: PalGuild): GuildDetail {
        return new GuildDetail(
            String(data.name ?? ""),
            data.Level ?? null,
            data.admin ?? null,
            data.member_count ?? null,
            ensureArray<GuildMember>(data.members).map((item) => {
                if (typeof item === 'object' && item !== null) {
                    return GuildMember.from_dict({ item } );
                }
                return GuildMember.from_dict({ player_uid: item });
            }),
            data.camp_count ?? null,
            ensureArray<PalCamp>(data.camps).map((item) => GuildCampDetail.from_dict(item)),
            ensureArray<PalGuildStorage>(data.items).map((item) => GuildStorage.from_dict(item)),
            data.expeditions,
            data.laboratory,
            data
        );
    }
}

export class PlayerInfo {
    constructor(
        public Name: string,
        public IP: string,
        public PlayerUID: string,
        public UserId: string,
        public GuildName: string | null,
        public GuildUUID: string | null,
        public WorldLocation: Position,
        public MapLocation: Position,
        public raw: PalPlayer
    ) {}

    static from_dict(data: PalPlayer): PlayerInfo {
        return new PlayerInfo(
            data.Name,
            data.IP,
            data.PlayerUID,
            data.UserId,
            data.GuildName ?? null,
            data.GuildUUID ?? null,
            Position.from_value(data.WorldLocation),
            Position.from_value(data.MapLocation),
            data
        );
    }
}

export class PlayersResponse {
    constructor(public players: PlayerInfo[]) {}

    static from_list(data: PalPlayer[]): PlayersResponse {
        return new PlayersResponse(ensureArray<PalPlayer>(data).map(item => PlayerInfo.from_dict(item)));
    }
}

export class PalInstance {
    constructor(
        public instance_id: string,
        public attributes: Record<string, unknown>
    ) {}

    static from_dict(instanceId: string, data: PalInstanceData): PalInstance {
        return new PalInstance(instanceId, data.attributes);
    }
}

export class PlayerBaseCamp {
    constructor(
        public id: string,
        public level: number | null,
        public world_pos: Position,
        public map_pos: Position,
        public state: string | null,
        public pals: Record<string, PalInstance>,
        public raw: PalBaseCampData
    ) {}

    static from_dict(data: PalBaseCampData): PlayerBaseCamp {
        const pals: Record<string, PalInstance> = {};
        const palData = data.pals ?? {};
        // pals might be array or record
        if (Array.isArray(palData)) {
            for (const item of palData) {
                if (item && typeof item === 'object' && 'instance_id' in item) {
                    pals[String(item.instance_id)] = PalInstance.from_dict(String(item.instance_id), item as PalInstanceData);
                }
            }
        } else if (typeof palData === 'object') {
            for (const [instanceId, item] of Object.entries(palData)) {
                pals[instanceId] = PalInstance.from_dict(instanceId, item as PalInstanceData);
            }
        }

        return new PlayerBaseCamp(
            String(data.id ?? ""),
            data.level,
            Position.from_value(data.world_pos),
            Position.from_value(data.map_pos),
            data.state,
            pals,
            data
        );
    }
}

export class PlayerPalsResponse {
    constructor(
        public team: Record<string, PalInstance>,
        public palbox: Record<string, PalInstance>,
        public base_camps: PlayerBaseCamp[],
        public raw: PalPlayerPals
    ) {}

    static from_dict(data: PalPlayerPals): PlayerPalsResponse {
        const team: Record<string, PalInstance> = {};
        const teamData = data.team ?? {};
        if (Array.isArray(teamData)) {
             for (const item of teamData) {
                if (item && typeof item === 'object' && 'instance_id' in item) {
                    team[String(item.instance_id)] = PalInstance.from_dict(String(item.instance_id), item as PalInstanceData);
                }
            }
        } else {
            for (const [id, val] of Object.entries(teamData)) {
                team[id] = PalInstance.from_dict(id, val as PalInstanceData);
            }
        }

        const palbox: Record<string, PalInstance> = {};
        const palboxData = data.palbox ?? {};
        if (Array.isArray(palboxData)) {
             for (const item of palboxData) {
                if (item && typeof item === 'object' && 'instance_id' in item) {
                    palbox[String(item.instance_id)] = PalInstance.from_dict(String(item.instance_id), item as PalInstanceData);
                }
            }
        } else {
            for (const [id, val] of Object.entries(palboxData)) {
                palbox[id] = PalInstance.from_dict(id, val as PalInstanceData);
            }
        }

        return new PlayerPalsResponse(
            team,
            palbox,
            ensureArray<PalBaseCampData>(data.base_camps).map((item) => PlayerBaseCamp.from_dict(item)),
            data
        );
    }
}

export class InventorySlot {
    constructor(
        public ItemID: string | null,
        public Count: number | null
    ) {}

    static from_dict(data: PalItemSlot): InventorySlot {
        return new InventorySlot(data.ItemID ?? null, data.Count ?? null);
    }
}

export class InventorySection {
    constructor(
        public Available: boolean | null,
        public ContainerID: string | null,
        public UsedSlots: number | null,
        public MaxSlots: number | null,
        public FreeSlots: number | null,
        public Slots: Record<string, InventorySlot>
    ) {}

    static from_dict(data: PalInventorySection | undefined): InventorySection {
        const slots: Record<string, InventorySlot> = {};
        const slotData = data?.Slots ?? {};
        // slotData might be array or record
        if (Array.isArray(slotData)) {
            slotData.forEach((slot, index) => {
                if (slot) slots[String(index)] = InventorySlot.from_dict(slot);
            });
        } else {
            for (const [index, slot] of Object.entries(slotData)) {
                slots[index] = InventorySlot.from_dict(slot as PalItemSlot);
            }
        }
        return new InventorySection(
            data?.Available ?? null,
            data?.ContainerID ?? null,
            data?.UsedSlots ?? null,
            data?.MaxSlots ?? null,
            data?.FreeSlots ?? null,
            slots
        );
    }
}

export class PlayerItemsResponse {
    constructor(
        public Items: InventorySection,
        public KeyItems: InventorySection,
        public Weapons: InventorySection,
        public Armor: InventorySection,
        public Food: InventorySection,
        public DropSlot: InventorySection,
        public raw: PalPlayerItems
    ) {}

    static from_dict(data: PalPlayerItems): PlayerItemsResponse {
        return new PlayerItemsResponse(
            InventorySection.from_dict(data.Items),
            InventorySection.from_dict(data.KeyItems),
            InventorySection.from_dict(data.Weapons),
            InventorySection.from_dict(data.Armor),
            InventorySection.from_dict(data.Food),
            InventorySection.from_dict(data.DropSlot),
            data
        );
    }
}

export class PlayerTechsResponse {
    constructor(
        public UnlockedCount: number | null,
        public LockedCount: number | null,
        public TotalCount: number | null,
        public Unlocked: string[],
        public raw: PalPlayerTechs
    ) {}

    static from_dict(data: PalPlayerTechs): PlayerTechsResponse {
        return new PlayerTechsResponse(
            data.UnlockedCount ?? null,
            data.LockedCount ?? null,
            data.TotalCount ?? null,
            ensureArray<unknown>(data.Unlocked).map((item) => String(item)),
            data
        );
    }
}

export class ProgressionPlayer {
    constructor(
        public level: number | null,
        public exp: number | null,
        public unusedStatusPoints: number | null
    ) {}

    static from_dict(data: PalProgressionPlayer): ProgressionPlayer {
        return new ProgressionPlayer(
            data.level,
            data.exp,
            data.unusedStatusPoints
        );
    }
}

export class ProgressionCurrencies {
    constructor(
        public lifmunks: number | null,
        public technologyPoints: number | null,
        public ancientTechnologyPoints: number | null
    ) {}

    static from_dict(data: PalProgressionCurrencies): ProgressionCurrencies {
        return new ProgressionCurrencies(
            data.lifmunks,
            data.technologyPoints,
            data.ancientTechnologyPoints
        );
    }
}

export class ProgressionBosses {
    constructor(
        public towerBossDefeatCounts: Record<string, number>,
        public normalBossDefeatFlags: Record<string, boolean>,
        public raidBossDefeatCounts: Record<string, number>,
        public totalBossDefeatCount: number | null,
        public predatorDefeatCount: number | null
    ) {}

    static from_dict(data: PalProgressionBosses): ProgressionBosses {
        return new ProgressionBosses(
            data.towerBossDefeatCounts ?? {},
            data.normalBossDefeatFlags ?? {},
            data.raidBossDefeatCounts ?? {},
            data.totalBossDefeatCount,
            data.predatorDefeatCount
        );
    }
}

export class ProgressionCaptures {
    constructor(
        public tribeCaptureCount: number | null,
        public palCaptureCounts: Record<string, number>,
        public palCaptureBonusCounts: Record<string, number>,
        public palButcherCounts: Record<string, number>
    ) {}

    static from_dict(data: PalProgressionCaptures): ProgressionCaptures {
        return new ProgressionCaptures(
            data.tribeCaptureCount,
            data.palCaptureCounts ?? {},
            data.palCaptureBonusCounts ?? {},
            data.palButcherCounts ?? {}
        );
    }
}

export class ProgressionActivities {
    constructor(
        public craftItemCounts: Record<string, number>,
        public normalDungeonClearCount: number | null,
        public fixedDungeonClearCount: number | null,
        public oilrigClearCount: number | null,
        public palRankUpCounts: Record<string, number>,
        public arenaSoloClearCounts: Record<string, number>,
        public npcTalkCounts: Record<string, number>,
        public fishingCounts: Record<string, number>,
        public foundTreasureCount: number | null,
        public campConqueredCount: number | null,
        public firstFishingComplete: boolean | null
    ) {}

    static from_dict(data: PalProgressionActivities): ProgressionActivities {
        return new ProgressionActivities(
            data.craftItemCounts ?? {},
            data.normalDungeonClearCount,
            data.fixedDungeonClearCount,
            data.oilrigClearCount,
            data.palRankUpCounts ?? {},
            data.arenaSoloClearCounts ?? {},
            data.npcTalkCounts ?? {},
            data.fishingCounts ?? {},
            data.foundTreasureCount,
            data.campConqueredCount,
            data.firstFishingComplete
        );
    }
}

export class PlayerProgressionResponse {
    constructor(
        public playerProgression: ProgressionPlayer,
        public currencies: ProgressionCurrencies,
        public bosses: ProgressionBosses,
        public captures: ProgressionCaptures,
        public activities: ProgressionActivities,
        public Level: number | null,
        public EXP: number | null,
        public UnusedStatusPoints: number | null,
        public Lifmunks: number | null,
        public TechnologyPoints: number | null,
        public AncientTechnologyPoints: number | null,
        public raw: PalPlayerProgression
    ) {}

    static from_dict(data: PalPlayerProgression): PlayerProgressionResponse {
        return new PlayerProgressionResponse(
            ProgressionPlayer.from_dict(data.playerProgression),
            ProgressionCurrencies.from_dict(data.currencies),
            ProgressionBosses.from_dict(data.bosses),
            ProgressionCaptures.from_dict(data.captures),
            ProgressionActivities.from_dict(data.activities),
            data.Level ?? null,
            data.EXP ?? null,
            data.UnusedStatusPoints ?? null,
            data.Lifmunks ?? null,
            data.TechnologyPoints ?? null,
            data.AncientTechnologyPoints ?? null,
            data
        );
    }
}