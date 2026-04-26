import { describe, it, expect, vi } from 'vitest';
import { client } from './setup.js';

describe('PalDefender Player and Guild Endpoints', () => {
    let activePlayerId: string | null = null;
    let activeGuildId: string | null = null;

    it('should fetch all online players', async () => {
        const mockPlayers = [{ Name: 'PalAdmin', PlayerUID: '123' }];

        // Mock a successful array response
        vi.spyOn((client as any).session, 'request').mockResolvedValueOnce({
            data: mockPlayers
        });

        const players = await client.players();
        expect(Array.isArray(players)).toBe(true);
        expect(players[0].Name).toBe('PalAdmin');

    });

    it('should fetch a specific player by identifier', async () => {
        if (!activePlayerId) return;

        const player = await client.player(activePlayerId);
        expect(player).toBeDefined();
        expect(player.UserId || player.PlayerUID).toBe(activePlayerId);
    });

    it('should return 404 for a non-existent player', async () => {
        const mockError = {
            isAxiosError: true,
            response: {
                status: 404,
                data: "Player not found."
            }
        };

        // Force the mock to reject for this specific call
        vi.spyOn((client as any).session, 'request').mockRejectedValueOnce(mockError);

        await expect(client.player('non_existent_id'))
            .rejects
            .toThrow(/not found/i);
    });

    it('should fetch all guilds', async () => {
        const guilds = await client.guilds();
        expect(typeof guilds).toBe('object');

        const guildIds = Object.keys(guilds);
        if (guildIds.length > 0 && guildIds[0]) {
            const firstGuild = guilds[guildIds[0]];
            expect(firstGuild).toHaveProperty('name');
            expect(firstGuild).toHaveProperty('member_count');
        }
    });

    it('should fetch detailed guild info by ID', async () => {
        if (!activeGuildId) return;

        const guild = await client.guild(activeGuildId);
        expect(guild).toHaveProperty('members');
        expect(guild).toHaveProperty('camps');
    });
});