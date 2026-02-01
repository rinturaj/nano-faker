import { describe, it, expect, beforeEach } from 'vitest';
import { setSeed } from '@nano-faker/core';
import { firstName, lastName, fullName, gender } from '../src/index.js';

describe('@nano-faker/person', () => {
    beforeEach(() => {
        setSeed(12345);
    });

    describe('firstName', () => {
        it('should generate a first name', () => {
            const name = firstName();
            expect(name).toBeTruthy();
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        });

        it('should capitalize first letter', () => {
            for (let i = 0; i < 20; i++) {
                const name = firstName();
                expect(name[0]).toBe(name[0]!.toUpperCase());
            }
        });

        it('should be deterministic', () => {
            setSeed(100);
            const name1 = firstName();

            setSeed(100);
            const name2 = firstName();

            expect(name1).toBe(name2);
        });

        it('should generate different names in sequence', () => {
            const names = new Set();
            for (let i = 0; i < 50; i++) {
                names.add(firstName());
            }
            // Should have variety (at least 30 unique names out of 50)
            expect(names.size).toBeGreaterThan(30);
        });

        it('should generate realistic-looking names', () => {
            for (let i = 0; i < 20; i++) {
                const name = firstName();
                // Should be between 3 and 15 characters
                expect(name.length).toBeGreaterThanOrEqual(3);
                expect(name.length).toBeLessThanOrEqual(15);
                // Should only contain letters
                expect(/^[A-Za-z]+$/.test(name)).toBe(true);
            }
        });
    });

    describe('lastName', () => {
        it('should generate a last name', () => {
            const name = lastName();
            expect(name).toBeTruthy();
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        });

        it('should capitalize first letter', () => {
            for (let i = 0; i < 20; i++) {
                const name = lastName();
                expect(name[0]).toBe(name[0]!.toUpperCase());
            }
        });

        it('should be deterministic', () => {
            setSeed(200);
            const name1 = lastName();

            setSeed(200);
            const name2 = lastName();

            expect(name1).toBe(name2);
        });

        it('should generate different names in sequence', () => {
            const names = new Set();
            for (let i = 0; i < 50; i++) {
                names.add(lastName());
            }
            // Should have variety
            expect(names.size).toBeGreaterThan(30);
        });

        it('should generate realistic-looking surnames', () => {
            for (let i = 0; i < 20; i++) {
                const name = lastName();
                // Should be between 4 and 20 characters
                expect(name.length).toBeGreaterThanOrEqual(4);
                expect(name.length).toBeLessThanOrEqual(20);
                // Should only contain letters
                expect(/^[A-Za-z]+$/.test(name)).toBe(true);
            }
        });
    });

    describe('fullName', () => {
        it('should generate a full name', () => {
            const name = fullName();
            expect(name).toBeTruthy();
            expect(typeof name).toBe('string');
            expect(name).toContain(' ');
        });

        it('should have first and last name', () => {
            const name = fullName();
            const parts = name.split(' ');
            expect(parts.length).toBe(2);
            expect(parts[0]!.length).toBeGreaterThan(0);
            expect(parts[1]!.length).toBeGreaterThan(0);
        });

        it('should be deterministic', () => {
            setSeed(300);
            const name1 = fullName();

            setSeed(300);
            const name2 = fullName();

            expect(name1).toBe(name2);
        });

        it('should generate different names in sequence', () => {
            const names = new Set();
            for (let i = 0; i < 50; i++) {
                names.add(fullName());
            }
            // Should have high variety
            expect(names.size).toBeGreaterThan(40);
        });
    });

    describe('gender', () => {
        it('should generate a gender', () => {
            const g = gender();
            expect(g).toBeTruthy();
            expect(typeof g).toBe('string');
        });

        it('should be one of valid options', () => {
            const validGenders = ['male', 'female', 'non-binary', 'other'];
            for (let i = 0; i < 50; i++) {
                const g = gender();
                expect(validGenders).toContain(g);
            }
        });

        it('should be deterministic', () => {
            setSeed(400);
            const g1 = gender();

            setSeed(400);
            const g2 = gender();

            expect(g1).toBe(g2);
        });

        it('should have variety', () => {
            const genders = new Set();
            for (let i = 0; i < 100; i++) {
                genders.add(gender());
            }
            // Should generate at least 2 different genders
            expect(genders.size).toBeGreaterThanOrEqual(2);
        });
    });
});
