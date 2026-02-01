/**
 * @nano-faker/number
 * 
 * Number generation utilities for fake data.
 */

import { int } from '@nano-faker/core';

/**
 * Generate a random age between min and max.
 * 
 * @param min - Minimum age (default: 18)
 * @param max - Maximum age (default: 80)
 * @returns Random age
 * 
 * @example
 * ```ts
 * const userAge = age();        // e.g., 42
 * const childAge = age(5, 12);  // e.g., 8
 * ```
 */
export function age(min = 18, max = 80): number {
    return int(min, max);
}

/**
 * Generate a random numeric ID with specified length.
 * 
 * @param length - Length of the ID (default: 8)
 * @returns Numeric ID as string
 * 
 * @example
 * ```ts
 * const userId = id();      // e.g., "47382910"
 * const orderId = id(12);   // e.g., "847362910485"
 * ```
 */
export function id(length = 8): string {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += int(0, 9).toString();
    }
    return result;
}

/**
 * Generate a one-time password (OTP) with specified length.
 * 
 * @param length - Length of the OTP (default: 6)
 * @returns OTP as string
 * 
 * @example
 * ```ts
 * const code = otp();     // e.g., "472839"
 * const pin = otp(4);     // e.g., "8473"
 * ```
 */
export function otp(length = 6): string {
    return id(length);
}

/**
 * Generate a random number within a range.
 * Alias for int() from core package.
 * 
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random number in range
 * 
 * @example
 * ```ts
 * const score = range(0, 100);    // e.g., 73
 * const temp = range(-10, 40);    // e.g., 15
 * ```
 */
export function range(min: number, max: number): number {
    return int(min, max);
}
