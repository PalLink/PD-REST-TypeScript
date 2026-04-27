import { describe, it, expect } from 'vitest';
import { client, mockedSession } from './setup.js';

describe('Read Endpoints', () => {
    it('should fetch version', async () => {
        const mockVersion = { 
            major: 1, minor: 0, patch: 0, build: 1,
            version_str: '1.0.0', version_str_long: '1.0.0-beta',
            beta: true 
        };
        // Tell the specific mocked session what to return for THIS test
        mockedSession.request.mockResolvedValueOnce({ data: mockVersion });

        const data = await client.version();
        expect(data.version_str).toBe('1.0.0');
    });
});
