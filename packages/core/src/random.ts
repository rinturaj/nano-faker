/**
 * Seeded random number generator using mulberry32 algorithm.
 * Provides deterministic pseudo-random number generation.
 */

// Internal state - controlled seed
let seed = Math.floor(Math.random() * 2147483647);

/**
 * Set the seed for deterministic random number generation.
 * Same seed will always produce the same sequence of random numbers.
 * 
 * @param value - Seed value (positive integer)
 * 
 * @example
 * ```ts
 * setSeed(12345);
 * const num1 = random();
 * 
 * setSeed(12345);
 * const num2 = random();
 * // num1 === num2 (deterministic)
 * ```
 */
export function setSeed(value: number): void {
    seed = value >>> 0; // Ensure unsigned 32-bit integer
}

/**
 * Get the current seed value.
 * Useful for reproducing random sequences.
 * 
 * @returns Current seed value
 */
export function getSeed(): number {
    return seed;
}

/**
 * Generate a random float between 0 (inclusive) and 1 (exclusive).
 * Uses mulberry32 algorithm for deterministic output.
 * 
 * @returns Random float in range [0, 1)
 * 
 * @example
 * ```ts
 * setSeed(123);
 * const value = random(); // e.g., 0.7234
 * ```
 */
export function random(): number {
    // Mulberry32 algorithm
    seed = (seed + 0x6d2b79f5) | 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/**
 * Generate a random integer between min (inclusive) and max (inclusive).
 * 
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random integer in range [min, max]
 * 
 * @example
 * ```ts
 * const age = int(18, 65); // e.g., 42
 * const dice = int(1, 6);  // e.g., 4
 * ```
 */
export function int(min: number, max: number): number {
    return Math.floor(random() * (max - min + 1)) + min;
}

/**
 * Generate a random float between min (inclusive) and max (exclusive).
 * 
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (exclusive)
 * @param precision - Number of decimal places (default: 2)
 * @returns Random float in range [min, max)
 * 
 * @example
 * ```ts
 * const price = float(10.0, 100.0, 2); // e.g., 45.67
 * const temp = float(-10, 40, 1);      // e.g., 23.4
 * ```
 */
export function float(min: number, max: number, precision = 2): number {
    const value = random() * (max - min) + min;
    return Number(value.toFixed(precision));
}
