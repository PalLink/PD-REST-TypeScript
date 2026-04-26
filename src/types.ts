/**
 * Configuration for the PalDefender Client
 */
export interface PalDefenderConfig {
    host?: string; // [cite: 116, 117]
    port?: number; // [cite: 116, 117]
    token?: string; // Marked as optional to support zero-config initialization [cite: 1280]
}

/**
 * PalDefender Version Information [cite: 49, 772]
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
 * Player Data Structure [cite: 53, 776]
 */
export interface PalPlayer {
    Name: string;
    IP: string;
    PlayerUID: string;
    UserId: string;
    GuildName: string;
    GuildUUID: string;
    WorldLocation: string;
    MapLocation: string;
}

/**
 * Guild and Camp Structures [cite: 50, 51, 52, 773, 774]
 */
export interface PalCamp {
    id: string;
    world_pos: string;
    map_pos: string;
    level?: number;
    state?: string;
    pals?: any[];
    buildings?: any[];
}

export interface PalGuild {
    name: string;
    Level: number;
    admin: string;
    member_count: number;
    members: any[];
    camp_count: number;
    camps: PalCamp[];
    items?: Record<string, any>;
    expeditions?: any[];
    laboratory?: any;
}

/**
 * Detailed pal data for team, box, and base camp sections. [cite: 778, 1442]
 */
export interface PalPlayerPals {
    team: Record<string, any>;
    palbox: Record<string, any>;
    base_camps: Record<string, any>;
}

/**
 * Inventory and Item Structures [cite: 58, 780, 781]
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
    Items: PalInventorySection;
    KeyItems: PalInventorySection;
    Weapons: PalInventorySection;
    Armor: PalInventorySection;
    Food: PalInventorySection;
    DropSlot: PalInventorySection;
}

/**
 * Progression and Tech Structures [cite: 58, 59, 781]
 */
export interface PalPlayerTechs {
    UnlockedCount: number;
    LockedCount: number;
    TotalCount: number;
    Unlocked: string[];
}

/**
 * Comprehensive player progression including legacy parity fields. [cite: 782, 1445]
 */
export interface PalPlayerProgression {
    playerProgression: any;
    currencies: any;
    bosses: any;
    captures: any;
    activities: any;
    Level: number;
    EXP: number;
    UnusedStatusPoints: number;
    Lifmunks: number;
    TechnologyPoints: number;
    AncientTechnologyPoints: number;
}

/**
 * POST Request Payloads [cite: 59, 62, 68, 72, 782, 791, 795]
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
 * API Response Shapes for structured error and success checking. [cite: 62, 74, 77, 79, 797, 800, 802, 1438, 1446]
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