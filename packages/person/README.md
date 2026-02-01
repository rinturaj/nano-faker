# @nano-faker/person

> Person data generation with syllable-based procedural names

## Installation

```bash
pnpm add @nano-faker/core @nano-faker/person
```

## Features

- 🎯 Syllable-based name generation (no large datasets)
- 📦 < 500B gzipped
- 🎲 Deterministic output
- 🌳 Fully tree-shakable

## Usage

```typescript
import { setSeed } from '@nano-faker/core';
import { firstName, lastName, fullName, gender } from '@nano-faker/person';

setSeed(12345);

firstName();  // "Alison"
lastName();   // "Anderson"
fullName();   // "Marcus Rodriguez"
gender();     // "female"
```

## How It Works

Instead of using large name datasets (which bloat bundle size), nano-faker uses **procedural generation** with syllable combinations:

```typescript
// Traditional approach (large dataset):
const names = ["Alice", "Bob", "Charlie", ...] // 1000s of names

// nano-faker approach (syllables):
const syllables = ["al", "an", "ar", ...] // ~100 syllables
// Combines to create realistic names
```

This keeps bundle size minimal while generating realistic-sounding names.

## API

### `firstName(): string`

Generate a procedural first name.

**Returns:** Capitalized first name (e.g., "Alison", "Marcus")

### `lastName(): string`

Generate a procedural last name.

**Returns:** Capitalized last name (e.g., "Anderson", "Rodriguez")

### `fullName(): string`

Generate a full name (first + last).

**Returns:** Full name (e.g., "Sarah Johnson")

### `gender(): string`

Generate a random gender.

**Returns:** One of: "male", "female", "non-binary", "other"

## License

MIT
