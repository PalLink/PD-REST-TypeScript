import { describe, it, expect, vi } from 'vitest';
import { client } from './setup.js';
import { GiveItem, GivePalEgg, GiveProgressionRequest } from '../src/models.js';

describe('Action (POST) Endpoints', () => {
    it('should correctly serialize item payloads using helper classes', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');
        
        await client.giveItems("player-1", [{ ItemId: "Stone", Count: 50}]);

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            method: 'POST',
            url: '/give/items/player-1',
            data: { Items: [{ ItemID: "Stone", Count: 50 }] }
        }));
    });

    it('should correctly serialize complex egg payloads', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');

        await client.givePalEggs("player-1", { EggID: "PalEgg_Dark_01", Level: 15, PalName: "Shadowbeak"});

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: { 
                PalEggs: [{ EggID: "PalEgg_Dark_01", PalID: "BlackGriffon", Level: 15 }] 
            }
        }));
    });

    it('should use server-side field names for progression requests', async () => {
        const requestSpy = vi.spyOn((client as any).session, 'request');

        await client.giveProgression("player-1", new GiveProgressionRequest(1000, undefined, 5));

        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: { EXP: 1000, TechnologyPoints: 5 }
        }));
    });
});