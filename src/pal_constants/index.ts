export * from "./eggs.js";
export * from "./items.js";
export * from "./pals.js";
export * from "./passives.js";
export * from "./skills.js";
export * from "./technology.js";
export * from "./recipes.js";

export const PAL_API_VERSION = "v1";
export const PAL_API_PATH = "pdapi";
export const DEFAULT_HOST = "127.0.0.1";
export const DEFAULT_PORT = 17993;

/**
 * PalDefender API Endpoints
 */
export const ENDPOINTS = {
    VERSION: "/version",
    PLAYERS: "/players",
    GUILDS: "/guilds",
    GUILD: (id: string) => `/guild/${id}`,
    PLAYER: (id: string) => `/player/${id}`,
    PALS: (id: string) => `/pals/${id}`,
    ITEMS: (id: string) => `/items/${id}`,
    TECHS: (id: string) => `/techs/${id}`,
    PROGRESSION: (id: string) => `/progression/${id}`,
    // POST Actions
    GIVE_ITEMS: (id: string) => `/give/items/${id}`,
    GIVE_PALS: (id: string) => `/give/pals/${id}`,
    GIVE_PAL_TEMPLATE: (id: string) => `/give/paltemplate/${id}`,
    GIVE_PAL_EGGS: (id: string) => `/give/paleggs/${id}`,
    GIVE_PROGRESSION: (id: string) => `/give/progression/${id}`,
    LEARN_TECH: (id: string) => `/learntech/${id}`,
    FORGET_TECH: (id: string) => `/forgettech/${id}`,
} as const;