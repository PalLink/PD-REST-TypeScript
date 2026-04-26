import { describe, it, expect } from 'vitest';
import { client, mockedSession } from './setup.js';

describe('Read Endpoints', () => {
    it('should fetch version', async () => {
        const mockVersion = { version_str: '1.0.0' };
        // Tell the specific mocked session what to return for THIS test
        mockedSession.request.mockResolvedValueOnce({ data: mockVersion });

        const data = await client.version();
        expect(data.version_str).toBe('1.0.0');
    });
});