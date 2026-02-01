import { describe, it, expect, beforeEach } from 'vitest';
import { setSeed } from '@nano-faker/core';
import { age, id, otp, range } from '../src/index.js';

describe('@nano-faker/number', () => {
    beforeEach(() => {
        setSeed(12345);
    });

    describe('age', () => {
        it('should generate age within default range', () => {
            for (let i = 0; i < 100; i++) {
                const value = age();
                expect(value).toBeGreaterThanOrEqual(18);
                expect(value).toBeLessThanOrEqual(80);
            }
        });

        it('should generate age within custom range', () => {
            for (let i = 0; i < 50; i++) {
                const value = age(5, 12);
                expect(value).toBeGreaterThanOrEqual(5);
                expect(value).toBeLessThanOrEqual(12);
            }
        });

        it('should be deterministic', () => {
            setSeed(100);
            const age1 = age();

            setSeed(100);
            const age2 = age();

            expect(age1).toBe(30);
            expect(age2).toBe(30);
        });
    });

    describe('id', () => {
        it('should generate ID with default length', () => {
            const value = id();
            expect(value).toHaveLength(8);
            expect(/^\d+$/.test(value)).toBe(true);
        });

        it('should generate ID with custom length', () => {
            const value = id(12);
            expect(value).toHaveLength(12);
            expect(/^\d+$/.test(value)).toBe(true);
        });

        it('should be deterministic', () => {
            setSeed(200);
            const id1 = id();

            setSeed(200);
            const id2 = id();

            expect(id1).toBe('36467492');
            expect(id2).toBe('36467492');
        });

        it('should generate different IDs in sequence', () => {
            const id1 = id();
            const id2 = id();
            const id3 = id();

            expect(id1).not.toBe(id2);
            expect(id2).not.toBe(id3);
        });

        it('should handle length of 1', () => {
            const value = id(1);
            expect(value).toHaveLength(1);
            expect(/^\d$/.test(value)).toBe(true);
        });
    });

    describe('otp', () => {
        it('should generate OTP with default length', () => {
            const value = otp();
            expect(value).toHaveLength(6);
            expect(/^\d+$/.test(value)).toBe(true);
        });

        it('should generate OTP with custom length', () => {
            const value = otp(4);
            expect(value).toHaveLength(4);
            expect(/^\d+$/.test(value)).toBe(true);
        });

        it('should be deterministic', () => {
            setSeed(300);
            const otp1 = otp();

            setSeed(300);
            const otp2 = otp();

            expect(otp1).toBe('807519');
            expect(otp2).toBe('807519');
        });
    });

    describe('range', () => {
        it('should generate number within range', () => {
            for (let i = 0; i < 100; i++) {
                const value = range(10, 50);
                expect(value).toBeGreaterThanOrEqual(10);
                expect(value).toBeLessThanOrEqual(50);
            }
        });

        it('should be deterministic', () => {
            setSeed(400);
            const range1 = range(1, 100);

            setSeed(400);
            const range2 = range(1, 100);

            expect(range1).toBe(62);
            expect(range2).toBe(62);
        });

        it('should handle negative ranges', () => {
            for (let i = 0; i < 50; i++) {
                const value = range(-100, -50);
                expect(value).toBeGreaterThanOrEqual(-100);
                expect(value).toBeLessThanOrEqual(-50);
            }
        });
    });
});
