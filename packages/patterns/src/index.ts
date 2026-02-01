/**
 * @nano-faker/patterns
 * 
 * Pattern-based fake data generation using format strings.
 */

import { int } from '@nano-faker/core';

const DIGITS = '0123456789';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHANUMERIC = DIGITS + LOWERCASE + UPPERCASE;

/**
 * Generate fake data based on a pattern string.
 * 
 * Placeholders:
 * - `#` → random digit (0-9)
 * - `@` → random lowercase letter (a-z)
 * - `*` → random alphanumeric character
 * - `\` → escape character (use `\#` for literal `#`)
 * 
 * @param pattern - Pattern string with placeholders
 * @returns Generated string based on pattern
 * 
 * @example
 * ```ts
 * fake("USR-####-@@");      // e.g., "USR-4728-ab"
 * fake("ID-***-***");       // e.g., "ID-a7X-9Bz"
 * fake("\\#\\#\\#");        // e.g., "###" (escaped)
 * fake("Order-#####");      // e.g., "Order-47382"
 * ```
 */
export function fake(pattern: string): string {
    let result = '';
    let i = 0;

    while (i < pattern.length) {
        const char = pattern[i]!;

        // Handle escape character
        if (char === '\\' && i + 1 < pattern.length) {
            result += pattern[i + 1];
            i += 2;
            continue;
        }

        // Handle placeholders
        switch (char) {
            case '#':
                result += DIGITS[int(0, DIGITS.length - 1)];
                break;
            case '@':
                result += LOWERCASE[int(0, LOWERCASE.length - 1)];
                break;
            case '*':
                result += ALPHANUMERIC[int(0, ALPHANUMERIC.length - 1)];
                break;
            default:
                result += char;
        }

        i++;
    }

    return result;
}
