/**
 * Utility for PalDefender Egg Identifiers.
 * Eggs range from 01 (smallest) to 05 (largest).
 */

export const PalEggType = {
    Dark: "Dark",
    Dragon: "Dragon",
    Earth: "Earth",
    Electricity: "Electricity",
    Fire: "Fire",
    Ice: "Ice",
    Leaf: "Leaf",
    Normal: "Normal",
    Water: "Water",
} as const;

export type PalEggType = (typeof PalEggType)[keyof typeof PalEggType];

/**
 * Generates a valid PalEgg ID string.
 * @param type The elemental type of the egg.
 * @param size The size from 1 (smallest) to 5 (largest).
 * @returns A formatted string e.g., "PalEgg_Dark_01"
 */
export function getPalEggId(type: PalEggType, size: 1 | 2 | 3 | 4 | 5): string {
    const paddedSize = size.toString().padStart(2, '0');
    return `PalEgg_${type}_${paddedSize}`;
}

/**
 * Pre-defined constants for the most common egg sizes.
 */
export const PalEgg = {
    Dark: { Small: "PalEgg_Dark_01", Normal: "PalEgg_Dark_02", Large: "PalEgg_Dark_03", Huge: "PalEgg_Dark_04", Legendary: "PalEgg_Dark_05" },
    Dragon: { Small: "PalEgg_Dragon_01", Normal: "PalEgg_Dragon_02", Large: "PalEgg_Dragon_03", Huge: "PalEgg_Dragon_04", Legendary: "PalEgg_Dragon_05" },
    Earth: { Small: "PalEgg_Earth_01", Normal: "PalEgg_Earth_02", Large: "PalEgg_Earth_03", Huge: "PalEgg_Earth_04", Legendary: "PalEgg_Earth_05" },
    Electricity: { Small: "PalEgg_Electricity_01", Normal: "PalEgg_Electricity_02", Large: "PalEgg_Electricity_03", Huge: "PalEgg_Electricity_04", Legendary: "PalEgg_Electricity_05" },
    Fire: { Small: "PalEgg_Fire_01", Normal: "PalEgg_Fire_02", Large: "PalEgg_Fire_03", Huge: "PalEgg_Fire_04", Legendary: "PalEgg_Fire_05" },
    Ice: { Small: "PalEgg_Ice_01", Normal: "PalEgg_Ice_02", Large: "PalEgg_Ice_03", Huge: "PalEgg_Ice_04", Legendary: "PalEgg_Ice_05" },
    Leaf: { Small: "PalEgg_Leaf_01", Normal: "PalEgg_Leaf_02", Large: "PalEgg_Leaf_03", Huge: "PalEgg_Leaf_04", Legendary: "PalEgg_Leaf_05" },
    Normal: { Small: "PalEgg_Normal_01", Normal: "PalEgg_Normal_02", Large: "PalEgg_Normal_03", Huge: "PalEgg_Normal_04", Legendary: "PalEgg_Normal_05" },
    Water: { Small: "PalEgg_Water_01", Normal: "PalEgg_Water_02", Large: "PalEgg_Water_03", Huge: "PalEgg_Water_04", Legendary: "PalEgg_Water_05" }
} as const;

export type PalEggElement = keyof typeof PalEgg;
export type PalEggSize = keyof typeof PalEgg['Dark'];

export const PAL_EGG_IDS = [
  "PalEgg_Dark_01", "PalEgg_Dark_02", "PalEgg_Dark_03", "PalEgg_Dark_04", "PalEgg_Dark_05",
  "PalEgg_Dragon_01", "PalEgg_Dragon_02", "PalEgg_Dragon_03", "PalEgg_Dragon_04", "PalEgg_Dragon_05",
  "PalEgg_Earth_01", "PalEgg_Earth_02", "PalEgg_Earth_03", "PalEgg_Earth_04", "PalEgg_Earth_05",
  "PalEgg_Electricity_01", "PalEgg_Electricity_02", "PalEgg_Electricity_03", "PalEgg_Electricity_04", "PalEgg_Electricity_05",
  "PalEgg_Fire_01", "PalEgg_Fire_02", "PalEgg_Fire_03", "PalEgg_Fire_04", "PalEgg_Fire_05",
  "PalEgg_Ice_01", "PalEgg_Ice_02", "PalEgg_Ice_03", "PalEgg_Ice_04", "PalEgg_Ice_05",
  "PalEgg_Leaf_01", "PalEgg_Leaf_02", "PalEgg_Leaf_03", "PalEgg_Leaf_04", "PalEgg_Leaf_05",
  "PalEgg_Normal_01", "PalEgg_Normal_02", "PalEgg_Normal_03", "PalEgg_Normal_04", "PalEgg_Normal_05",
  "PalEgg_Water_01", "PalEgg_Water_02", "PalEgg_Water_03", "PalEgg_Water_04", "PalEgg_Water_05"
] as const;

export type PalEggId = (typeof PAL_EGG_IDS)[number];