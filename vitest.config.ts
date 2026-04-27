import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // This tells Vitest to provide Node globals like 'process'
    environment: 'node',
    globals: true,
  },
});