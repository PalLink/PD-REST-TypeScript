# PalDefender Rest Client (TypeScript)

[![npm version](https://img.shields.io/badge/npm-v1.0.0-cyan)](https://www.npmjs.com/package/paldefender-rest-client)
[![license](https://img.shields.io/badge/license-MIT-green)](https://github.com/GlitchApotamus/paldefender-client/blob/main/LICENSE)

An installable, type-safe TypeScript client for the PalDefender REST API. This package provides a high-level interface to manage Palworld servers, including player stats, guild management, and advanced item/pal granting.

## Install

```bash
npm install paldefender-rest-client
```

## Quick Start

```typescript
import { PalDefenderClient, PalId } from 'paldefender-rest-client';

const client = new PalDefenderClient({
    token: 'your-admin-password', // or set PAL_TOKEN env var
    host: '127.0.0.1',
    port: 8212
});

async function main() {
    // List all players
    const { players } = await client.players();
    
    // Grant a Pal using the helper shorthand
    // Supports both PlayerUID and UserID (Steam/Mac/GDK/PS5)
    await client.givePals("steam_76561198000000000", [PalId.Anubis, 50]);
}
```

---

## 🆔 ID Parameter Support

For all functions listed below that accept an `id` parameter (targeting a player), the following formats are supported:

* **PlayerUID**: The internal Palworld GUID (e.g., `XXXXXXXX-0000-0000-0000-000000000000`).
* **UserID**: The platform-specific ID (e.g., `steam_00000000000000000`, `mac_...`, `gdk_...`, or `ps5_...`).

*Note: Functions targeting **Guilds** or **Bases** require their specific GUIDs and do not support UserIDs.*

---

## API Reference

### Info & Players
| Method | Description |
| :--- | :--- |
| `version()` / `getVersion()` | Returns server and anticheat version info. |
| `players()` / `getPlayers()` | Returns a list of all players currently or previously on the server. |
| `player(id)` / `getPlayer(id)` | Returns profile data. Supports **PlayerUID** or **UserID**. |
| `findPlayerByName(name)` | Helper to find a specific player by their exact in-game name. |
| `findPlayersByPartialName(part)`| Returns an array of players matching a name fragment. |

### Guilds & Bases
| Method | Description |
| :--- | :--- |
| `guilds()` / `getGuilds()` | Returns a list of all guilds/groups. |
| `guild(id)` / `getGuild(id)` | Returns detailed guild info. Requires **Guild GUID**. |
| `deleteBase(baseId)` | Deletes a base camp by its **Base GUID**. |

### Player Deep-Dive
| Method | Description |
| :--- | :--- |
| `pals(id)` | Returns all Pals owned by player. Supports **PlayerUID/UserID**. |
| `items(id)` | Returns player's full inventory. Supports **PlayerUID/UserID**. |
| `techs(id)` | Returns list of unlocked tech IDs. Supports **PlayerUID/UserID**. |
| `progression(id)` | Returns stats and boss history. Supports **PlayerUID/UserID**. |

---

## Action Endpoints (Granting)
For a detailed breakdown of every available function and its parameters, see the [Full Usage Guide](./docs/Usage.md).<br><br>
All "give" methods use a flexible input system and support both **PlayerUID** and **UserID**.

### Items: `giveItems(id, ...items)`
```typescript
await client.giveItems("steam_76561198000000000", 
    "Stone",                  // ID only
    ["Wood", 100],            // [ID, Count]
    { ItemID: "Iron", Count: 5 }
);
```

### Pals: `givePals(id, ...pals)`
```typescript
import { PalId } from 'paldefender-rest-client';

await client.givePals("XXXXXXXX-0000-0000-0000-000000000000", 
    PalId.Anubis,             // Level 1
    ["BadCatgirl", 50]        // Level 50
);
```

### Eggs: `givePalEggs(id, ...eggs)`
```typescript
import { PAL_EGG_IDS } from 'paldefender-rest-client';

await client.givePalEggs("steam_76561198000000000", 
    [PAL_EGG_IDS.Dark.Huge, "BadCatgirl", 1] // [EggID, PalID, Level]
);
```

---

## Configuration
| Option | Default | Description |
| :--- | :--- | :--- |
| `token` | `process.env.PAL_TOKEN` | Your PalDefender AdminPassword. |
| `host` | `127.0.0.1` | Server IP or Domain. |
| `port` | `8212` | REST API Port (default is 8212). |
| `timeout` | `30000` | Request timeout in milliseconds. |

## Error Handling
If the API returns a non-200 status code, a `PalDefenderApiError` is thrown.

```typescript
try {
    await client.giveItems("invalid-id", "Stone");
} catch (err) {
    if (err instanceof PalDefenderApiError) {
        console.log(err.statusCode);   // e.g., 404
        console.log(err.responseBody); // raw error from server
    }
}
```
