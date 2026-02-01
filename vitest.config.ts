import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'dist/',
                '**/*.test.ts',
                '**/*.config.ts',
                'playground/',
            ],
        },
    },
    resolve: {
        alias: {
            '@nano-faker/core': resolve(__dirname, './packages/core/src/index.ts'),
            '@nano-faker/number': resolve(__dirname, './packages/number/src/index.ts'),
            '@nano-faker/person': resolve(__dirname, './packages/person/src/index.ts'),
            '@nano-faker/internet': resolve(__dirname, './packages/internet/src/index.ts'),
            '@nano-faker/patterns': resolve(__dirname, './packages/patterns/src/index.ts'),
        },
    },
});
