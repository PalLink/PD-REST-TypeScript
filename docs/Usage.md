# PalDefender API: Complete Usage Reference

This document provides a detailed breakdown of all available functions in the `PalDefenderClient`.

## 🆔 Player Identification
All functions that target a **Player** accept the `id` parameter in two formats:
- **UserID**: Platform-specific (e.g., `steam_76561198000000000`, `mac_...`, `gdk_...`, `ps5_...`).
- **PlayerUID**: The internal GUID (e.g., `XXXXXXXX-0000-0000-0000-000000000000`).

Functions targeting **Guilds** or **Bases** require their specific GUIDs and do not support Player UserIDs.

---

## 📡 System & Discovery

### `version()` / `getVersion()`
Returns the server's current version and the PalDefender Anticheat version.
```typescript
const versionInfo = await client.version();
```

### `players()` / `getPlayers()`
Returns a list of all players known to the server.
```typescript
const { players } = await client.players();
```

### `findPlayerByName(name: string)`
Searches for a single player with an exact name match. Returns `[]` if not found.
```typescript
const player = await client.findPlayerByName("GlitchApotamus");
```

### `findPlayersByPartialName(part: string)`
Returns an array of players whose names contain the provided string (case-insensitive).
```typescript
const matches = await client.findPlayersByPartialName("glitch");
```

---

## 🔍 Deep-Dive Data

### `player(id)` / `getPlayer(id)`
Returns the full profile for a player, including basic stats and location.
```typescript
const profile = await client.player("steam_76561198000000000");
```

### `pals(id)` / `getPals(id)`
Returns an object containing all Pals owned by the player, categorized by Team, Box, and assigned to Base Camps.
```typescript
const allPals = await client.pals("steam_...");
```

### `items(id)` / `getItems(id)`
Returns the player's full inventory, categorized by Common, Essential, Weapon, and Armor slots.
```typescript
const inventory = await client.items("steam_...");
```

### `techs(id)` / `getTechs(id)`
Returns an array of all Technology IDs currently unlocked by the player.
```typescript
const techList = await client.techs("steam_...");
```

### `progression(id)` / `getProgression(id)`
Returns detailed progression data: Bosses defeated, Pals captured (counts per species), and completed activities.
```typescript
const data = await client.progression("steam_...");
```

---

## 🏰 Guilds & Bases

### `guilds()` / `getGuilds()`
Returns a list of all guilds/groups on the server.
```typescript
const list = await client.guilds();
```

### `guild(guildId: string)`
Returns detailed information about a guild, including member lists and base locations.
```typescript
const details = await client.guild("GUILD-GUID-HERE");
```

### `deleteBase(baseId: string)`
Permanently deletes a base camp. **Requires the Base GUID.**
```typescript
await client.deleteBase("BASE-GUID-HERE");
```

---

## 🎁 Action & Granting (The "Give" System)

All "Give" functions support **rest parameters**, meaning you can pass multiple items/pals in one function call.

### `giveItems(id, ...items)`
Grants items to a player's inventory.
```typescript
await client.giveItems("steam_...", 
    "Stone",              // ID only (count: 1)
    ["Wood", 500],        // [ID, Count]
    { ItemID: "Iron", Count: 10 } // Object literal
);
```

### `givePals(id, ...pals)`
Grants Pals to a player's PalBox.
```typescript
import { PalId } from 'paldefender-rest-client';

await client.givePals("steam_...", 
    PalId.Anubis,         // Level 1
    ["BadCatgirl", 50],   // Level 50 Nyafia
    { PalName: "Jetragon", Level: 15 } // Object literal
);
```

### `givePalEggs(id, ...eggs)`
Grants specific Pal breeds inside of eggs.
```typescript
import { PAL_EGG_IDS } from 'paldefender-rest-client';

await client.givePalEggs("steam_...", 
    [PAL_EGG_IDS.Dark.Huge, "BadCatgirl", 1] // [EggID, PalID, Level]
);
```

### `giveProgression(id, data)`
Grants Experience, Technology Points, or Lifmunk Effigies.
```typescript
await client.giveProgression("steam_...", {
    EXP: 10000,
    TechnologyPoints: 5,
    Lifmunks: 2
});
```

---

## 🧪 Technology Management

### `learnTech(id, ...techs)`
Unlocks one or more technologies for a player.
```typescript
import { TechnologyId } from 'paldefender-rest-client';

await client.learnTech("steam_...", TechnologyId.MegaSphere, "EnergyGenerator");
```

### `forgetTech(id, ...techs)`
Locks technologies. Passing `"All"` as a single argument will reset all tech.
```typescript
// Reset everything
await client.forgetTech("steam_...", "All");

// Lock specific item
await client.forgetTech("steam_...", "UnlockCollectItem_Textile");
```

---

## 🛠 Advanced Features

### `giveRecipeMaterials(id, product, quantity)`
A helper function that looks up the required materials for a `product` and grants them to the player multiplied by `quantity`.
```typescript
await client.giveRecipeMaterials("steam_...", "MegaSphere", 10);
```
