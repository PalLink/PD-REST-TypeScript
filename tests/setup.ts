import { vi } from 'vitest';
import { PalDefenderClient } from '../src/index.js';

// Comprehensive mock for Axios
vi.mock('axios', () => {
    const mockSession = {
        // Ensure request always returns something with a .data property
        request: vi.fn().mockResolvedValue({ data: {} }), 
        defaults: { timeout: 30000 },
        interceptors: {
            request: { use: vi.fn() },
            response: { use: vi.fn() }
        }
    };

    return {
        default: {
            create: vi.fn(() => mockSession),
            isAxiosError: vi.fn((payload) => !!payload?.isAxiosError),
        },
        isAxiosError: vi.fn((payload) => !!payload?.isAxiosError),
    };
});

export const client = new PalDefenderClient({
    token: 'test-token', // Triggers the constructor
});

// Use this to change return values for specific tests
export const mockedSession = vi.mocked((client as any).session);