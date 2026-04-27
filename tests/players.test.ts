import { describe, it, expect, vi } from 'vitest';
import { client, mockedSession } from './setup.js';

describe('PalDefender Player and Guild Endpoints', () => {
    let activePlayerId: string | null = null;
    let activeGuildId: string | null = null;

    it('should fetch all online players', async () => {
        const mockPlayers = [{ Name: 'PalAdmin', PlayerUID: '123' }];

        // Mock a successful array response
        mockedSession.request.mockResolvedValueOnce({
            data: mockPlayers
        });

        const response = await client.players();
        expect(Array.isArray(response.players)).toBe(true);
        expect(response.players[0].Name).toBe('PalAdmin');
    });

    it('should fetch a specific player by identifier', async () => {
        const mockPlayer = { Name: 'PalAdmin', PlayerUID: '123' };
        mockedSession.request.mockResolvedValueOnce({ data: mockPlayer });

        const player = await client.player('123');
        expect(player).toBeDefined();
        expect(player.PlayerUID).toBe('123');
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
        mockedSession.request.mockRejectedValueOnce(mockError);

        await expect(client.player('non_existent_id'))
            .rejects
            .toThrow(/not found/i);
    });

    it('should fetch all guilds', async () => {
        const mockGuilds = {
            "guild-1": { name: "Test Guild", Level: 10, admin: "admin-1" }
        };
        mockedSession.request.mockResolvedValueOnce({ data: mockGuilds });

        const response = await client.guilds();
        expect(typeof response.guilds).toBe('object');

        const guildIds = Object.keys(response.guilds);
        expect(guildIds.length).toBeGreaterThan(0);
        const firstGuild = response.guilds[guildIds[0]];
        expect(firstGuild.name).toBe('Test Guild');
        expect(firstGuild.Level).toBe(10);
    });

    it('should fetch detailed guild info by ID', async () => {
        const mockGuildDetail = { name: "Test Guild", Level: 10, members: [], camps: [] };
        mockedSession.request.mockResolvedValueOnce({ data: mockGuildDetail });

        const guild = await client.guild('guild-1');
        expect(guild.name).toBe('Test Guild');
        expect(Array.isArray(guild.members)).toBe(true);
        expect(Array.isArray(guild.camps)).toBe(true);
    });
});
