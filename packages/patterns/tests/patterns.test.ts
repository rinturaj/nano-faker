import { describe, it, expect, beforeEach } from 'vitest';
import { setSeed } from '@nano-faker/core';
import { fake } from '../src/index.js';

describe('@nano-faker/patterns', () => {
    beforeEach(() => {
        setSeed(12345);
    });

    describe('fake', () => {
        it('should replace # with digits', () => {
            const result = fake('####');
            expect(result).toHaveLength(4);
            expect(/^\d{4}$/.test(result)).toBe(true);
        });

        it('should replace @ with lowercase letters', () => {
            const result = fake('@@@@');
            expect(result).toHaveLength(4);
            expect(/^[a-z]{4}$/.test(result)).toBe(true);
        });

        it('should replace * with alphanumeric', () => {
            const result = fake('****');
            expect(result).toHaveLength(4);
            expect(/^[a-zA-Z0-9]{4}$/.test(result)).toBe(true);
        });

        it('should handle mixed patterns', () => {
            const result = fake('USR-####-@@');
            expect(result).toMatch(/^USR-\d{4}-[a-z]{2}$/);
        });

        it('should preserve literal characters', () => {
            const result = fake('ID-###');
            expect(result.startsWith('ID-')).toBe(true);
            expect(result).toMatch(/^ID-\d{3}$/);
        });

        it('should be deterministic', () => {
            setSeed(100);
            const result1 = fake('###-@@@');

            setSeed(100);
            const result2 = fake('###-@@@');

            expect(result1).toBe(result2);
        });

        it('should handle escape sequences', () => {
            const result = fake('\\#\\#\\#');
            expect(result).toBe('###');
        });

        it('should handle mixed escaped and unescaped', () => {
            const result = fake('\\##');
            expect(result).toMatch(/^#\d$/);
        });

        it('should handle escaped @ and *', () => {
            const result1 = fake('\\@\\@');
            expect(result1).toBe('@@');

            const result2 = fake('\\*\\*');
            expect(result2).toBe('**');
        });

        it('should handle complex patterns', () => {
            const result = fake('Order-#####-***-@@@@');
            expect(result).toMatch(/^Order-\d{5}-[a-zA-Z0-9]{3}-[a-z]{4}$/);
        });

        it('should handle empty pattern', () => {
            const result = fake('');
            expect(result).toBe('');
        });

        it('should handle pattern with no placeholders', () => {
            const result = fake('Hello World');
            expect(result).toBe('Hello World');
        });

        it('should handle pattern with only placeholders', () => {
            const result = fake('######');
            expect(result).toHaveLength(6);
            expect(/^\d{6}$/.test(result)).toBe(true);
        });

        it('should generate different results in sequence', () => {
            const result1 = fake('###');
            const result2 = fake('###');
            const result3 = fake('###');

            // At least some should be different
            const unique = new Set([result1, result2, result3]);
            expect(unique.size).toBeGreaterThan(1);
        });

        it('should handle escape at end of string', () => {
            const result = fake('test\\');
            expect(result).toBe('test\\');
        });

        it('should handle real-world patterns', () => {
            const ssn = fake('###-##-####');
            expect(ssn).toMatch(/^\d{3}-\d{2}-\d{4}$/);

            const license = fake('@@##-####-@@@@');
            expect(license).toMatch(/^[a-z]{2}\d{2}-\d{4}-[a-z]{4}$/);

            const code = fake('***-***-***');
            expect(code).toMatch(/^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{3}-[a-zA-Z0-9]{3}$/);
        });
    });
});
