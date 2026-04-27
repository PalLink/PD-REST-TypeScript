# PalDefender Rest Client (TypeScript)

Installable TypeScript client for the PalDefender REST API. This package covers every route currently registered in the PalDefender reference implementation, providing a type-safe, cross-platform interface.

## Install

```bash
npm install paldefender-rest-client
```

## IMPORTANT NOTE

This repo will be updated after PalDefender (Beta) is released unless otherwise stated.

## Quick Start

```typescript
import { PalDefenderClient, GiveItem } from 'paldefender-client';

// Only change these if your Palworld server isn't hosted on this machine.
const client = new PalDefenderClient({
    host = '127.0.0.1',
    port = 17993,
    token, //this must be set!
    timeout = 30000,
    displayAddress
});

async function main() {
    const version = await client.version();
    const players = await client.players();
    const result = await client.giveItems("player-uid-or-userid", [
        new GiveItem("Stone", 100)
    ]);
}
```

## Configuration
The client defaults to `127.0.0.1:17993` if the host or port are omitted in the constructor.

## Available Methods

### Read operations
- `version()`
- `guilds()`
- `guild(guild_id)`
- `players()`
- `player(player_identifier)`
- `pals(player_identifier)`
- `items(player_identifier)` 
- `techs(player_identifier)` 
- `progression(player_identifier)`

### Write operations
- `giveItems(player_identifier, items)`
- `givePals(player_identifier, pals)` 
- `givePalTemplates(player_identifier, templates)` 
- `givePalEggs(player_identifier, pal_eggs)` 
- `giveProgression(player_identifier, request)`
- `learnTech(player_identifier, technology)` 
- `forgetTech(player_identifier, technology)`

## Helper Models
The package includes request helper classes that enforce validation rules before sending requests
- `GiveItem` 
- `GivePal` 
- `GivePalEgg` 
- `GiveProgressionRequest` 

## Errors
HTTP errors raise `PalDefenderApiError`. The exception exposes:
- `statusCode` 
- `method` 
- `path` 
- `responseBody` 