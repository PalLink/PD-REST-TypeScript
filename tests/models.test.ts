import { describe, it, expect } from 'vitest';
import * as Models from '../src/models.js';
import { PalVersion, PalPlayer, PalGuild, PalBaseCampData, PalPlayerPals, PalPlayerItems } from '../src/types.js';

describe('Models Robustness', () => {
    it('VersionInfo.from_dict should map fields correctly', () => {
        const raw: PalVersion = {
            major: 1, minor: 2, patch: 3, build: 4,
            version_str: "1.2.3", version_str_long: "1.2.3.4",
            beta: false
        };
        const model = Models.VersionInfo.from_dict(raw);
        expect(model.major).toBe(1);
        expect(model.version_str).toBe("1.2.3");
    });

    it('Position.from_value should handle various shapes', () => {
        const p1 = Models.Position.from_value({ x: 1, y: 2, z: 3 });
        expect(p1.X).toBe(1);
        const p2 = Models.Position.from_value({ X: 10, Y: 20, Z: 30 });
        expect(p2.X).toBe(10);
        const p3 = Models.Position.from_value("invalid");
        expect(p3.X).toBeNull();
        expect(p3.raw).toBe("invalid");
    });

    it('GuildSummary.from_dict should handle members as objects (legacy compatibility)', () => {
        const raw = {
            name: "Test",
            Level: 5,
            members: { "player-1": "player-1" }, // Object instead of array
            camps: []
        };
        const model = Models.GuildSummary.from_dict("guild-1", raw as any);
        expect(model.members).toContain("player-1");
    });

    it('GuildDetail.from_dict should handle complex nested data', () => {
        const raw: PalGuild = {
            name: "Full Guild",
            Level: 10,
            admin: "admin-1",
            member_count: 1,
            members: ["player-1"],
            camp_count: 1,
            camps: [{
                id: "camp-1",
                world_pos: { X: 1, Y: 1, Z: 1 },
                map_pos: { X: 2, Y: 2, Z: 2 },
                pals: [{ instance_id: "pal-1" }]
            }],
            items: [{
                container_id: "cont-1",
                current: 1,
                max: 10,
                slots: { "0": { ItemID: "Wood", Count: 5 } }
            }]
        };
        const model = Models.GuildDetail.from_dict(raw);
        expect(model.name).toBe("Full Guild");
        expect(model.members[0].player_uid).toBe("player-1");
        expect(model.camps[0].id).toBe("camp-1");
        expect(model.items[0].container_id).toBe("cont-1");
    });

    it('PlayerBaseCamp.from_dict should handle pals as record', () => {
        const raw: PalBaseCampData = {
            id: "base-1",
            level: 1,
            world_pos: { X: 0, Y: 0, Z: 0 },
            map_pos: { X: 0, Y: 0, Z: 0 },
            state: "Active",
            pals: {
                "instance-1": { instance_id: "instance-1", attributes: {} } as any
            }
        };
        const model = Models.PlayerBaseCamp.from_dict(raw);
        expect(model.pals["instance-1"]).toBeDefined();
    });

    it('PlayerPalsResponse.from_dict should handle arrays for team/palbox', () => {
        const raw = {
            team: [{ instance_id: "pal-1", attributes: {} }],
            palbox: { "pal-2": { instance_id: "pal-2", attributes: {} } },
            base_camps: []
        };
        const model = Models.PlayerPalsResponse.from_dict(raw as any);
        expect(model.team["pal-1"]).toBeDefined();
        expect(model.palbox["pal-2"]).toBeDefined();
    });

    it('PlayerItemsResponse.from_dict should handle missing sections', () => {
        const raw = {
            Items: { Slots: { "0": { ItemID: "Stone", Count: 10 } } }
        };
        const model = Models.PlayerItemsResponse.from_dict(raw as any);
        expect(model.Items.Slots["0"].ItemID).toBe("Stone");
        expect(model.Food.Available).toBeNull();
    });
});
