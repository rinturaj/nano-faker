/**
 * @nano-faker/person
 * 
 * Person data generation using procedural syllable-based name generation.
 * Keeps bundle size minimal while producing realistic-sounding names.
 */

import { pick, int } from '@nano-faker/core';
import {
    firstSyllables,
    middleSyllables,
    lastSyllables,
    surnameFirst,
    surnameLast,
    genders,
} from './syllables.js';

/**
 * Capitalize the first letter of a string.
 */
function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate a procedural first name using syllable combinations.
 * 
 * @returns Generated first name
 * 
 * @example
 * ```ts
 * const name = firstName(); // e.g., "Alison", "Marcus", "Evelyn"
 * ```
 */
export function firstName(): string {
    const syllableCount = int(2, 3);
    let name = pick(firstSyllables);

    for (let i = 1; i < syllableCount - 1; i++) {
        name += pick(middleSyllables);
    }

    if (syllableCount > 1) {
        name += pick(lastSyllables);
    }

    return capitalize(name);
}

/**
 * Generate a procedural last name using syllable combinations.
 * 
 * @returns Generated last name
 * 
 * @example
 * ```ts
 * const surname = lastName(); // e.g., "Anderson", "Martinez", "Taylor"
 * ```
 */
export function lastName(): string {
    const first = pick(surnameFirst);
    const last = pick(surnameLast);
    return capitalize(first + last);
}

/**
 * Generate a full name (first + last).
 * 
 * @returns Generated full name
 * 
 * @example
 * ```ts
 * const name = fullName(); // e.g., "Sarah Johnson", "Marcus Rodriguez"
 * ```
 */
export function fullName(): string {
    return `${firstName()} ${lastName()}`;
}

/**
 * Generate a random gender.
 * 
 * @returns Gender string
 * 
 * @example
 * ```ts
 * const g = gender(); // e.g., "female", "male", "non-binary", "other"
 * ```
 */
export function gender(): string {
    return pick(genders);
}
