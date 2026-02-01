# @nano-faker/internet

> Internet-related data generation for nano-faker

## Installation

```bash
pnpm add @nano-faker/core @nano-faker/person @nano-faker/internet
```

## Usage

```typescript
import { setSeed } from '@nano-faker/core';
import { email, username, domain, url, ipv4 } from '@nano-faker/internet';

setSeed(12345);

email();     // "sarah.johnson42@gmail.com"
username();  // "sarah_johnson42"
domain();    // "example.com"
url();       // "https://example.com"
ipv4();      // "192.168.1.42"
```

## API

### `email(): string`

Generate a random email address.

Uses procedurally generated names from `@nano-faker/person` and a minimal domain list.

**Returns:** Email address (e.g., "sarah.johnson42@gmail.com")

### `username(): string`

Generate a random username.

**Returns:** Username (e.g., "sarah_johnson42", "marcus.rod")

### `domain(): string`

Generate a random domain name.

**Returns:** Domain (e.g., "example.com", "mysite.io")

### `url(): string`

Generate a random URL.

**Returns:** URL (e.g., "https://example.com", "http://mysite.io")

### `ipv4(): string`

Generate a random IPv4 address.

**Returns:** IPv4 address (e.g., "192.168.1.42")

## License

MIT
