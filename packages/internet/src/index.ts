/**
 * @nano-faker/internet
 * 
 * Internet-related data generation utilities.
 */

import { pick, int } from '@nano-faker/core';
import { firstName, lastName } from '@nano-faker/person';

// Minimal domain list to keep bundle size small
const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'proton.me', 'icloud.com', 'mail.com'] as const;

const tlds = ['com', 'org', 'net', 'io', 'dev', 'app'] as const;

/**
 * Generate a random email address.
 * 
 * @returns Email address
 * 
 * @example
 * ```ts
 * const addr = email(); // e.g., "sarah.johnson42@gmail.com"
 * ```
 */
export function email(): string {
    const first = firstName().toLowerCase();
    const last = lastName().toLowerCase();
    const separator = pick(['.', '_', '']);
    const number = int(0, 100) < 30 ? int(1, 99).toString() : '';
    const domain = pick(domains);

    return `${first}${separator}${last}${number}@${domain}`;
}

/**
 * Generate a random username.
 * 
 * @returns Username
 * 
 * @example
 * ```ts
 * const user = username(); // e.g., "sarah_johnson42", "marcus.rod"
 * ```
 */
export function username(): string {
    const first = firstName().toLowerCase();
    const last = lastName().toLowerCase();
    const separator = pick(['.', '_', '']);
    const number = int(0, 100) < 40 ? int(1, 999).toString() : '';

    return `${first}${separator}${last}${number}`;
}

/**
 * Generate a random domain name.
 * 
 * @returns Domain name
 * 
 * @example
 * ```ts
 * const d = domain(); // e.g., "example.com", "mysite.io"
 * ```
 */
export function domain(): string {
    const name = lastName().toLowerCase();
    const tld = pick(tlds);

    return `${name}.${tld}`;
}

/**
 * Generate a random URL.
 * 
 * @returns URL
 * 
 * @example
 * ```ts
 * const link = url(); // e.g., "https://example.com", "http://mysite.io"
 * ```
 */
export function url(): string {
    const protocol = pick(['http', 'https']);
    const domainName = domain();

    return `${protocol}://${domainName}`;
}

/**
 * Generate a random IPv4 address.
 * 
 * @returns IPv4 address
 * 
 * @example
 * ```ts
 * const ip = ipv4(); // e.g., "192.168.1.42"
 * ```
 */
export function ipv4(): string {
    const octet1 = int(1, 255);
    const octet2 = int(0, 255);
    const octet3 = int(0, 255);
    const octet4 = int(1, 255);

    return `${octet1}.${octet2}.${octet3}.${octet4}`;
}
