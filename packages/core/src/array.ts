/**
 * Array utilities using seeded random number generation.
 */

import { random, int } from './random.js';

/**
 * Pick a random element from an array.
 * 
 * @param array - Array to pick from
 * @returns Random element from the array
 * 
 * @example
 * ```ts
 * const colors = ['red', 'green', 'blue'];
 * const color = pick(colors); // e.g., 'green'
 * ```
 */
export function pick<T>(array: readonly T[]): T {
    if (array.length === 0) {
        throw new Error('Cannot pick from empty array');
    }
    const index = int(0, array.length - 1);
    return array[index]!;
}

/**
 * Shuffle an array using Fisher-Yates algorithm.
 * Returns a new array, does not modify the original.
 * 
 * @param array - Array to shuffle
 * @returns New shuffled array
 * 
 * @example
 * ```ts
 * const deck = [1, 2, 3, 4, 5];
 * const shuffled = shuffle(deck); // e.g., [3, 1, 5, 2, 4]
 * ```
 */
export function shuffle<T>(array: readonly T[]): T[] {
    const result = [...array];

    // Fisher-Yates shuffle
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [result[i], result[j]] = [result[j]!, result[i]!];
    }

    return result;
}
