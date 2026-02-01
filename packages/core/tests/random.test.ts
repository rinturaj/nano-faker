import { describe, it, expect, beforeEach } from 'vitest';
import { setSeed, getSeed, random, int, float } from '../src/random.js';

describe('@nano-faker/core - random', () => {
    beforeEach(() => {
        // Reset to a known seed before each test
        setSeed(12345);
    });

    describe('setSeed / getSeed', () => {
        it('should set and get seed', () => {
            setSeed(999);
            expect(getSeed()).toBe(999);
        });

        it('should handle large seed values', () => {
            setSeed(2147483647);
            expect(getSeed()).toBe(2147483647);
        });
    });

    describe('random', () => {
        it('should generate deterministic values', () => {
            setSeed(123);
            const value1 = random();

            setSeed(123);
            const value2 = random();

            expect(value1).toBe(value2);
        });

        it('should generate values between 0 and 1', () => {
            for (let i = 0; i < 100; i++) {
                const value = random();
                expect(value).toBeGreaterThanOrEqual(0);
                expect(value).toBeLessThan(1);
            }
        });

        it('should generate different values in sequence', () => {
            setSeed(456);
            const value1 = random();
            const value2 = random();
            const value3 = random();

            expect(value1).not.toBe(value2);
            expect(value2).not.toBe(value3);
        });

        it('should produce consistent sequence with same seed', () => {
            setSeed(789);
            const sequence1 = [random(), random(), random()];

            setSeed(789);
            const sequence2 = [random(), random(), random()];

            expect(sequence1).toEqual(sequence2);
        });
    });

    describe('int', () => {
        it('should generate integers within range', () => {
            for (let i = 0; i < 100; i++) {
                const value = int(1, 10);
                expect(value).toBeGreaterThanOrEqual(1);
                expect(value).toBeLessThanOrEqual(10);
                expect(Number.isInteger(value)).toBe(true);
            }
        });

        it('should generate deterministic integers', () => {
            setSeed(111);
            const value1 = int(1, 100);

            setSeed(111);
            const value2 = int(1, 100);

            expect(value1).toBe(value2);
        });

        it('should handle single value range', () => {
            const value = int(5, 5);
            expect(value).toBe(5);
        });

        it('should handle negative ranges', () => {
            for (let i = 0; i < 50; i++) {
                const value = int(-10, -5);
                expect(value).toBeGreaterThanOrEqual(-10);
                expect(value).toBeLessThanOrEqual(-5);
            }
        });
    });

    describe('float', () => {
        it('should generate floats within range', () => {
            for (let i = 0; i < 100; i++) {
                const value = float(0, 10);
                expect(value).toBeGreaterThanOrEqual(0);
                expect(value).toBeLessThan(10);
            }
        });

        it('should respect precision parameter', () => {
            const value1 = float(0, 100, 2);
            expect(value1.toString().split('.')[1]?.length || 0).toBeLessThanOrEqual(2);

            const value2 = float(0, 100, 4);
            expect(value2.toString().split('.')[1]?.length || 0).toBeLessThanOrEqual(4);
        });

        it('should generate deterministic floats', () => {
            setSeed(222);
            const value1 = float(0, 100, 3);

            setSeed(222);
            const value2 = float(0, 100, 3);

            expect(value1).toBe(value2);
        });

        it('should handle negative ranges', () => {
            for (let i = 0; i < 50; i++) {
                const value = float(-50, 50, 1);
                expect(value).toBeGreaterThanOrEqual(-50);
                expect(value).toBeLessThan(50);
            }
        });
    });
});
