# PalDefender Rest Client (TypeScript)

[![npm version](https://img.shields.io/badge/npm-v11.12.1-cyan?style=plastic)](https://www.npmjs.com/package/paldefender-rest-client)
[![npm version](https://img.shields.io/badge/node-v24.14.1-green?style=plastic)](https://www.npmjs.com/package/paldefender-rest-client)
[![license](https://img.shields.io/badge/license-MIT-green?style=plastic)](https://github.com/PalLink/PD-REST-TypeScript/blob/main/LICENSE)
[![PalLink](https://img.shields.io/badge/Pal-Link-blue?style=plastic&label=Pal&labelColor=pink&color=blue)](https://discord.gg/YUgcMMc6Ch)

An installable, type-safe TypeScript Wrapper for the PalDefender REST API. This package provides a high-level interface to manage Palworld servers with a focus on developer experience and intuitive "Smart Input" granting.

## Install

```bash
npm install paldefender-rest-client
```

## Quick Start

```typescript
import { PalDefenderClient, PalId } from 'paldefender-rest-client';

const client = new PalDefenderClient({
    token: 'your-PD-Token', 
    host: '127.0.0.1',
    port: 17993
});

async function main() {
    // List all players (using alias)
    const { players } = await client.players();
    
    // Smart Input: Pass multiple items as separate arguments, 
    // single strings, or arrays. Duplicates are merged automatically!
    await client.giveItems("steam_76561198000000000", 
        "Stone", 
        { ItemId: "Stone", Count: 15 }, 
        "Wood"
    );
}
```

---

## 🆔 ID Parameter Support

For all functions targeting a player, the following formats are supported:

* **PlayerUID**: The internal Palworld GUID (`XXXXXXXX-0000-0000-0000-000000000000`).
* **UserID**: The platform-specific ID (`steam_...`, `mac_...`, `gdk_...`, or `ps5_...`).

---

## Action Endpoints (Smart Granting)
All "give" and "tech" methods use a **Uniform Rest Parameter** system. You never have to worry about whether to pass an array or a single value—both work perfectly.

### Items: `giveItems(id, ...items)`
Automatically aggregates counts for duplicate IDs (e.g., "Stone" + {ItemId: "Stone", Count: 5} = 6 Stone).
```typescript
await client.giveItems(id, "Stone"); // Shorthand (Count: 1)
await client.giveItems(id, ["Stone", "Wood"]); // Single array
await client.giveItems(id, "Stone", { ItemId: "Wood", Count: 100 }); // Mixed rest params
```

### Pals: `givePals(id, ...pals)`
Supports friendly `PalName` keys (e.g., `"Anubis"`) or raw `PalId` values (e.g., `"Alpaca"`).
```typescript
import { PalId } from 'paldefender-rest-client';

await client.givePals(id, "Anubis"); // Level 1 shorthand
await client.givePals(id, PalId.Jetragon, { PalName: "Anubis", Level: 50 }); // Mixed
```

### Eggs: `givePalEggs(id, ...eggs)`
Supports Egg IDs, detailed objects, or tuples for quick entry.
```typescript
await client.givePalEggs(id, 
    "Egg_Dark_01",                       // Shorthand
    ["Egg_Dark_02", "Anubis", 15],       // Tuple: [EggID, Pal, Level]
    { EggID: "Egg_Fire_01", Level: 50 }  // Detailed Object
);
```

### Tech: `learnTech` / `forgetTech`
Supports keys, raw IDs, and a magic `"All"` toggle that expands to every known technology.
```typescript
await client.learnTech(id, "MegaShield");
await client.learnTech(id, "Altar", "GrapplingGun"); // Multiple args
await client.learnTech(id, "All"); // Grants every technology
```

### Progression: `giveProgression(id, options)`
Cleanly grant experience or points using a standard object.
```typescript
await client.giveProgression(id, { 
    exp: 5000, 
    technologyPoints: 10,
    lifmunks: 5 
});
```

---

## API Reference

### Info & Players
| Method | Alias | Description |
| :--- | :--- | :--- |
| `getVersion()` | `version()` | Returns server and anticheat version info. |
| `getPlayers()` | `players()` | Returns a list of all players (online and offline). |
| `getPlayer(id)` | `player(id)` | Returns profile data (Supports PlayerUID/UserID). |
| `findPlayerByName(name)` | — | Exact name match helper. |
| `findPlayersByPartialName(part)`| — | Name fragment search helper. |

### Guilds & Bases
| Method | Alias | Description |
| :--- | :--- | :--- |
| `getGuilds()` | `guilds()` | Returns a list of all guilds/groups. |
| `getGuild(id)` | `guild(id)` | Detailed guild info (Requires Guild GUID). |
| `deleteBase(baseId)` | — | Deletes a base camp (Requires Base GUID). |

### Deep-Dive
| Method | Alias | Description |
| :--- | :--- | :--- |
| `getPals(id)` | `pals(id)` | Returns all Pals owned by player. |
| `getItems(id)` | `items(id)` | Returns player's full inventory. |
| `getTechs(id)` | `techs(id)` | Returns list of unlocked tech IDs. |
| `getProgression(id)` | `progression(id)` | Returns player stats and boss history. |

---

## Configuration
| Option | Default | Description |
| :--- | :--- | :--- |
| `token` | `process.env.PD_TOKEN` | Your PalDefender Admin Token. |
| `host` | `127.0.0.1` | Server IP or Domain. |
| `port` | `17993` | REST API Port. |
| `timeout` | `30000` | Request timeout in ms. |
| `displayAddress` | `None` | Application name for API logs. |

## Error Handling
If the API returns a non-200 status, a `PalDefenderApiError` is thrown.

```typescript
try {
    await client.giveItems("invalid-id", "Stone");
} catch (err) {
    if (err instanceof PalDefenderApiError) {
        console.error(`Status ${err.statusCode}: ${err.message}`);
    }
}
```