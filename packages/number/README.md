# @nano-faker/number

> Number generation utilities for nano-faker

## Installation

```bash
pnpm add @nano-faker/core @nano-faker/number
```

## Usage

```typescript
import { setSeed } from '@nano-faker/core';
import { age, id, otp, range } from '@nano-faker/number';

setSeed(12345);

age();           // 42 (default: 18-80)
age(5, 12);      // 8 (custom range)
id();            // "47382910" (8 digits)
id(12);          // "847362910485"
otp();           // "472839" (6 digits)
otp(4);          // "8473"
range(0, 100);   // 73
```

## API

### `age(min?: number, max?: number): number`

Generate a random age.

**Default:** min=18, max=80

### `id(length?: number): string`

Generate a numeric ID.

**Default:** length=8

### `otp(length?: number): string`

Generate a one-time password.

**Default:** length=6

### `range(min: number, max: number): number`

Generate a number within range (alias for `int` from core).

## License

MIT
