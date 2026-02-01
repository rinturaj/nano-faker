# @nano-faker/core

> Foundation package for nano-faker with seeded random number generation

## Installation

```bash
pnpm add @nano-faker/core
```

## Features

- 🎲 Deterministic random number generation (mulberry32 algorithm)
- 🔢 Integer and float generation
- 🎯 Array utilities (pick, shuffle)
- 📦 < 1KB gzipped
- 🌳 Fully tree-shakable

## Usage

### Random Number Generation

```typescript
import { setSeed, random, int, float } from '@nano-faker/core';

// Set seed for deterministic output
setSeed(12345);

// Generate random float [0, 1)
const r = random(); // 0.7234...

// Generate random integer [min, max]
const age = int(18, 80); // 42

// Generate random float with precision
const price = float(10.0, 100.0, 2); // 45.67
```

### Array Utilities

```typescript
import { pick, shuffle } from '@nano-faker/core';

// Pick random element
const color = pick(['red', 'green', 'blue']); // 'green'

// Shuffle array (returns new array)
const shuffled = shuffle([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4]
```

## API

### `setSeed(seed: number): void`

Set the seed for deterministic random number generation.

**Parameters:**
- `seed` - Positive integer seed value

**Example:**
```typescript
setSeed(12345);
```

### `getSeed(): number`

Get the current seed value.

**Returns:** Current seed

### `random(): number`

Generate a random float between 0 (inclusive) and 1 (exclusive).

**Returns:** Random float [0, 1)

### `int(min: number, max: number): number`

Generate a random integer between min and max (both inclusive).

**Parameters:**
- `min` - Minimum value (inclusive)
- `max` - Maximum value (inclusive)

**Returns:** Random integer [min, max]

### `float(min: number, max: number, precision?: number): number`

Generate a random float between min and max.

**Parameters:**
- `min` - Minimum value (inclusive)
- `max` - Maximum value (exclusive)
- `precision` - Number of decimal places (default: 2)

**Returns:** Random float [min, max)

### `pick<T>(array: T[]): T`

Pick a random element from an array.

**Parameters:**
- `array` - Array to pick from

**Returns:** Random element

**Throws:** Error if array is empty

### `shuffle<T>(array: T[]): T[]`

Shuffle an array using Fisher-Yates algorithm.

**Parameters:**
- `array` - Array to shuffle

**Returns:** New shuffled array (original unchanged)

## License

MIT
