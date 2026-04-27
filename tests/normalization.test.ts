import { describe, it, expect, vi, beforeEach } from 'vitest';
import { client, mockedSession } from './setup.js';
import { GiveItem, GivePal, GivePalEgg, GiveProgressionRequest } from '../src/models.js';
import { ItemId, PalId, TechnologyId } from '../src/pal_constants/index.js';

describe('Client Input Normalization', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('giveItems should merge duplicates and handle shorthands', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');
        
        await client.giveItems("player-1", 
            "Stone", 
            ["Stone", 10], 
            new GiveItem("Stone", 5),
            { ItemID: "Wood", Count: 100 }
        );

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: {
                Items: expect.arrayContaining([
                    { ItemID: "Stone", Count: 16 },
                    { ItemID: "Wood", Count: 100 }
                ])
            }
        }));
    });

    it('givePals should handle shorthands and constants', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');

        await client.givePals("player-1",
            "Anubis",
            ["Jetragon", 50],
            PalId.Frostallion
        );

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: {
                Pals: [
                    { PalID: "Anubis", Level: 1 },
                    { PalID: "JetDragon", Level: 50 },
                    { PalID: "IceHorse", Level: 1 }
                ]
            }
        }));
    });

    it('learnTech should handle constants and varargs', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');

        await client.learnTech("player-1", TechnologyId.MegaSphere, "Arrow");

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: {
                Technology: ["Special_PalSphere_Grade_02", "Arrow"]
            }
        }));
    });

    it('giveRecipeMaterials should resolve and grant items', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');

        await client.giveRecipeMaterials("player-1", ItemId.MegaSphere, 2);

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            url: '/give/items/player-1',
            data: {
                Items: expect.arrayContaining([
                    { ItemID: "Pal_crystal_S", Count: 2 },
                    { ItemID: "CopperIngot", Count: 2 },
                    { ItemID: "Wood", Count: 10 },
                    { ItemID: "Stone", Count: 10 }
                ])
            }
        }));
    });

    it('givePalEggs should handle various inputs', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');

        await client.givePalEggs("player-1",
            new GivePalEgg("Egg1", "Anubis"),
            ["Egg2", PalId.Jetragon, 15],
            { EggID: "Egg3", PalTemplate: "custom.json" }
        );

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: {
                PalEggs: [
                    { EggID: "Egg1", PalID: "Anubis" },
                    { EggID: "Egg2", PalID: "JetDragon", Level: 15 },
                    { EggID: "Egg3", PalTemplate: "custom.json" }
                ]
            }
        }));
    });

    it('giveProgression should handle model or options', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');

        await client.giveProgression("player-1", undefined, { exp: 5000 });
        expect(requestSpy).toHaveBeenLastCalledWith(expect.objectContaining({
            data: { EXP: 5000 }
        }));

        await client.giveProgression("player-1", new GiveProgressionRequest(10));
        expect(requestSpy).toHaveBeenLastCalledWith(expect.objectContaining({
            data: { EXP: 10 }
        }));
    });

    it('deleteBase should call correct endpoint', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');
        await client.deleteBase("base-123");
        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            method: 'POST',
            url: '/deletebase/base-123'
        }));
    });
});
