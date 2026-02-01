import { describe, it, expect, beforeEach } from 'vitest';
import { setSeed } from '../src/random.js';
import { pick, shuffle } from '../src/array.js';

describe('@nano-faker/core - array', () => {
    beforeEach(() => {
        setSeed(12345);
    });

    describe('pick', () => {
        it('should pick an element from array', () => {
            const array = ['a', 'b', 'c', 'd', 'e'];
            const picked = pick(array);
            expect(array).toContain(picked);
        });

        it('should be deterministic with same seed', () => {
            const array = [1, 2, 3, 4, 5];

            setSeed(100);
            const pick1 = pick(array);

            setSeed(100);
            const pick2 = pick(array);

            expect(pick1).toBe(pick2);
        });

        it('should work with single element array', () => {
            const array = ['only'];
            expect(pick(array)).toBe('only');
        });

        it('should throw on empty array', () => {
            expect(() => pick([])).toThrow('Cannot pick from empty array');
        });

        it('should work with different types', () => {
            const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
            const picked = pick(objects);
            expect(objects).toContain(picked);
        });
    });

    describe('shuffle', () => {
        it('should return array with same elements', () => {
            const array = [1, 2, 3, 4, 5];
            const shuffled = shuffle(array);

            expect(shuffled).toHaveLength(array.length);
            expect(shuffled.sort()).toEqual(array.sort());
        });

        it('should not modify original array', () => {
            const array = [1, 2, 3, 4, 5];
            const original = [...array];
            shuffle(array);

            expect(array).toEqual(original);
        });

        it('should be deterministic with same seed', () => {
            const array = [1, 2, 3, 4, 5];

            setSeed(200);
            const shuffle1 = shuffle(array);

            setSeed(200);
            const shuffle2 = shuffle(array);

            expect(shuffle1).toEqual(shuffle2);
        });

        it('should handle empty array', () => {
            expect(shuffle([])).toEqual([]);
        });

        it('should handle single element', () => {
            expect(shuffle([1])).toEqual([1]);
        });

        it('should actually shuffle (not always same order)', () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let sameOrder = 0;

            for (let i = 0; i < 100; i++) {
                const shuffled = shuffle(array);
                if (JSON.stringify(shuffled) === JSON.stringify(array)) {
                    sameOrder++;
                }
            }

            // Should not be in original order most of the time
            expect(sameOrder).toBeLessThan(10);
        });
    });
});
