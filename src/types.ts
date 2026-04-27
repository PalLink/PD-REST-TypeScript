/**
 * Configuration for the PalDefender Client
 */
export interface PalDefenderConfig {
    host?: string;
    port?: number;
    token?: string;
    timeout?: number;
    displayAddress?: string;
}

/**
 * PalDefender Version Information
 */
export interface PalVersion {
    major: number;
    minor: number;
    patch: number;
    build: number;
    version_str: string;
    version_str_long: string;
    beta: boolean;
}

/**
 * Basic Position Structure
 */
export interface PalPosition {
    X: number | null;
    Y: number | null;
    Z: number | null;
}

/**
 * Player Data Structure
 */
export interface PalPlayer {
    Name: string;
    IP: string;
    PlayerUID: string;
    UserId: string;
    GuildName: string;
    GuildUUID: string;
    WorldLocation: PalPosition | string;
    MapLocation: PalPosition | string;
}

/**
 * Guild and Camp Structures
 */
export interface PalCamp {
    id: string;
    world_pos: PalPosition | string;
    map_pos: PalPosition | string;
    level?: number;
    state?: string;
    pals?: Record<string, unknown>[];
    buildings?: Record<string, unknown>[];
}

export interface PalGuild {
    name: string;
    Level: number;
    admin: string;
    member_count: number;
    members: string[];
    camp_count: number;
    camps: PalCamp[];
    items?: PalGuildStorage[];
    expeditions?: unknown;
    laboratory?: unknown;
}

export interface PalGuildStorage {
    container_id: string | null;
    current: number | null;
    max: number | null;
    slots: Record<string, Record<string, unknown>>;
}

/**
 * Detailed pal instance data.
 */
export interface PalInstanceData {
    instance_id: string;
    attributes: Record<string, unknown>;
}

/**
 * Detailed pal data for team, box, and base camp sections.
 */
export interface PalPlayerPals {
    team?: Record<string, PalInstanceData>;
    palbox?: Record<string, PalInstanceData>;
    base_camps?: PalBaseCampData[];
}

export interface PalBaseCampData {
    id: string;
    level: number | null;
    world_pos: PalPosition;
    map_pos: PalPosition;
    state: string | null;
    pals: Record<string, PalInstanceData>;
}

/**
 * Inventory and Item Structures
 */
export interface PalItemSlot {
    ItemID: string;
    Count: number;
}

export interface PalInventorySection {
    Available: boolean;
    ContainerID: string;
    UsedSlots: number;
    MaxSlots: number;
    FreeSlots: number;
    Slots: Record<string, PalItemSlot>;
}

/**
 * Maps the six specific sections returned by the server. 
 */
export interface PalPlayerItems {
    Items?: PalInventorySection;
    KeyItems?: PalInventorySection;
    Weapons?: PalInventorySection;
    Armor?: PalInventorySection;
    Food?: PalInventorySection;
    DropSlot?: PalInventorySection;
}

/**
 * Progression and Tech Structures
 */
export interface PalPlayerTechs {
    UnlockedCount: number;
    LockedCount: number;
    TotalCount: number;
    Unlocked: string[];
}

export interface PalProgressionPlayer {
    level: number | null;
    exp: number | null;
    unusedStatusPoints: number | null;
}

export interface PalProgressionCurrencies {
    lifmunks: number | null;
    technologyPoints: number | null;
    ancientTechnologyPoints: number | null;
}

export interface PalProgressionBosses {
    towerBossDefeatCounts: Record<string, number>;
    normalBossDefeatFlags: Record<string, boolean>;
    raidBossDefeatCounts: Record<string, number>;
    totalBossDefeatCount: number | null;
    predatorDefeatCount: number | null;
}

export interface PalProgressionCaptures {
    tribeCaptureCount: number | null;
    palCaptureCounts: Record<string, number>;
    palCaptureBonusCounts: Record<string, number>;
    palButcherCounts: Record<string, number>;
}

export interface PalProgressionActivities {
    craftItemCounts: Record<string, number>;
    normalDungeonClearCount: number | null;
    fixedDungeonClearCount: number | null;
    oilrigClearCount: number | null;
    palRankUpCounts: Record<string, number>;
    arenaSoloClearCounts: Record<string, number>;
    npcTalkCounts: Record<string, number>;
    fishingCounts: Record<string, number>;
    foundTreasureCount: number | null;
    campConqueredCount: number | null;
    firstFishingComplete: boolean | null;
}

/**
 * Comprehensive player progression including legacy parity fields.
 */
export interface PalPlayerProgression {
    playerProgression: PalProgressionPlayer;
    currencies: PalProgressionCurrencies;
    bosses: PalProgressionBosses;
    captures: PalProgressionCaptures;
    activities: PalProgressionActivities;
    Level: number;
    EXP: number;
    UnusedStatusPoints: number;
    Lifmunks: number;
    TechnologyPoints: number;
    AncientTechnologyPoints: number;
}

/**
 * POST Request Payloads
 */
export interface GiveItemRequest {
    ItemID: string;
    Count: number;
}

export interface GiveItemsRequest {
    Items: GiveItemRequest[];
}

export interface GivePalRequest {
    PalID: string;
    Level: number;
}

export interface GivePalsRequest {
    Pals: GivePalRequest[];
}

export interface GivePalTemplatesRequest {
    PalTemplates: string[];
}

export interface GivePalEggRequest {
    EggID: string;
    PalID?: string;
    PalTemplate?: string;
    Level?: number;
}

export interface GivePalEggsRequest {
    PalEggs: GivePalEggRequest[];
}

export interface GiveProgressionRequest {
    EXP?: number;
    Lifmunks?: number;
    TechnologyPoints?: number;
    AncientTechnologyPoints?: number;
}

/**
 * API Response Shapes for structured error and success checking.
 */
export interface PalActionResult {
    Granted?: {
        Items?: number;
        Pals?: number;
        PalTemplates?: string[];
        PalEggs?: number;
        EXP?: number;
        Lifmunks?: number;
        TechnologyPoints?: number;
        AncientTechnologyPoints?: number;
    };
    Error?: string;
}

export interface TechActionResult {
    Errors?: string[];
    UnlockedCount?: number;
    Unlocked?: string[];
    ForgottenCount?: number;
    Forgotten?: string[];
    Skipped?: string[];
}

export interface GivePalInternal {
    PalID: string;
    Level: number;
}

export interface GivePalEggInternal {
    EggID: string;
    PalID?: string;
    PalTemplate?: string;
    Level?: number;
}