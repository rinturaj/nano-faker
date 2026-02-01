import { describe, it, expect, beforeEach } from 'vitest';
import { setSeed } from '@nano-faker/core';
import { email, username, domain, url, ipv4 } from '../src/index.js';

describe('@nano-faker/internet', () => {
    beforeEach(() => {
        setSeed(12345);
    });

    describe('email', () => {
        it('should generate a valid email format', () => {
            const addr = email();
            expect(addr).toMatch(/^[a-z]+[._]?[a-z]+\d*@[a-z]+\.[a-z]+$/);
        });

        it('should be deterministic', () => {
            setSeed(100);
            const email1 = email();

            setSeed(100);
            const email2 = email();

            expect(email1).toBe('evlinturnlis52@yahoo.com');
            expect(email2).toBe('evlinturnlis52@yahoo.com');
        });

        it('should generate different emails in sequence', () => {
            const emails = new Set();
            for (let i = 0; i < 50; i++) {
                emails.add(email());
            }
            expect(emails.size).toBeGreaterThan(40);
        });

        it('should contain @ symbol', () => {
            for (let i = 0; i < 20; i++) {
                expect(email()).toContain('@');
            }
        });

        it('should use valid domains', () => {
            const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'proton.me', 'icloud.com', 'mail.com'];
            for (let i = 0; i < 50; i++) {
                const addr = email();
                const domainPart = addr.split('@')[1];
                expect(validDomains).toContain(domainPart);
            }
        });
    });

    describe('username', () => {
        it('should generate a username', () => {
            const user = username();
            expect(user).toBeTruthy();
            expect(typeof user).toBe('string');
            expect(user.length).toBeGreaterThan(0);
        });

        it('should be lowercase', () => {
            for (let i = 0; i < 20; i++) {
                const user = username();
                expect(user).toBe(user.toLowerCase());
            }
        });

        it('should be deterministic', () => {
            setSeed(200);
            const user1 = username();

            setSeed(200);
            const user2 = username();

            expect(user1).toBe('naley_parson');
            expect(user2).toBe('naley_parson');
        });

        it('should generate different usernames in sequence', () => {
            const usernames = new Set();
            for (let i = 0; i < 50; i++) {
                usernames.add(username());
            }
            expect(usernames.size).toBeGreaterThan(40);
        });

        it('should match valid username pattern', () => {
            for (let i = 0; i < 20; i++) {
                const user = username();
                expect(user).toMatch(/^[a-z]+[._]?[a-z]+\d*$/);
            }
        });
    });

    describe('domain', () => {
        it('should generate a domain', () => {
            const d = domain();
            expect(d).toBeTruthy();
            expect(d).toContain('.');
        });

        it('should be deterministic', () => {
            setSeed(300);
            const d1 = domain();

            setSeed(300);
            const d2 = domain();

            expect(d1).toBe('tayaker.dev');
            expect(d2).toBe('tayaker.dev');
        });

        it('should match domain pattern', () => {
            for (let i = 0; i < 20; i++) {
                const d = domain();
                expect(d).toMatch(/^[a-z]+\.(com|org|net|io|dev|app)$/);
            }
        });

        it('should use valid TLDs', () => {
            const validTlds = ['com', 'org', 'net', 'io', 'dev', 'app'];
            for (let i = 0; i < 50; i++) {
                const d = domain();
                const tld = d.split('.')[1];
                expect(validTlds).toContain(tld);
            }
        });
    });

    describe('url', () => {
        it('should generate a URL', () => {
            const link = url();
            expect(link).toBeTruthy();
            expect(link).toMatch(/^https?:\/\//);
        });

        it('should be deterministic', () => {
            setSeed(400);
            const url1 = url();

            setSeed(400);
            const url2 = url();

            expect(url1).toBe('https://jonard.io');
            expect(url2).toBe('https://jonard.io');
        });

        it('should match URL pattern', () => {
            for (let i = 0; i < 20; i++) {
                const link = url();
                expect(link).toMatch(/^https?:\/\/[a-z]+\.(com|org|net|io|dev|app)$/);
            }
        });

        it('should use http or https protocol', () => {
            for (let i = 0; i < 50; i++) {
                const link = url();
                expect(link.startsWith('http://') || link.startsWith('https://')).toBe(true);
            }
        });
    });

    describe('ipv4', () => {
        it('should generate an IPv4 address', () => {
            const ip = ipv4();
            expect(ip).toBeTruthy();
            expect(ip).toMatch(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);
        });

        it('should be deterministic', () => {
            setSeed(500);
            const ip1 = ipv4();

            setSeed(500);
            const ip2 = ipv4();

            expect(ip1).toBe('68.186.92.223');
            expect(ip2).toBe('68.186.92.223');
        });

        it('should have valid octets', () => {
            for (let i = 0; i < 50; i++) {
                const ip = ipv4();
                const octets = ip.split('.').map(Number);

                expect(octets).toHaveLength(4);
                octets.forEach((octet, index) => {
                    expect(octet).toBeGreaterThanOrEqual(index === 0 || index === 3 ? 1 : 0);
                    expect(octet).toBeLessThanOrEqual(255);
                });
            }
        });

        it('should generate different IPs in sequence', () => {
            const ips = new Set();
            for (let i = 0; i < 50; i++) {
                ips.add(ipv4());
            }
            expect(ips.size).toBeGreaterThan(40);
        });
    });
});
