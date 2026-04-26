import { describe, it, expect, vi } from 'vitest';
import { client } from './setup.js';

describe('Error Handling', () => {
    it('should raise PalDefenderApiError for failed requests', async () => {
        const mockError = {
            isAxiosError: true, // Crucial for the mock check
            response: {
                status: 404,
                data: "Player not found."
            }
        };

        // Ensure the session request is mocked to reject
        vi.spyOn((client as any).session, 'request').mockRejectedValue(mockError);

        await expect(client.player("missing"))
            .rejects
            .toThrow(/Player not found/);
    });
});