# nano-faker

> **Lightweight, tree-shakable fake data generation for modern JavaScript**

A minimal alternative to FakerJS with **zero dependencies**, **full tree-shaking support**, and **deterministic output**. Perfect for testing, prototyping, and development.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)

## ✨ Features

- 🎯 **Minimal Bundle Size** - Core package < 1KB gzipped
- 🌳 **Fully Tree-Shakable** - Import only what you need
- 🎲 **Deterministic** - Same seed = same output (perfect for testing)
- 📦 **Zero Dependencies** - No external packages
- 🚀 **ESM-Only** - Modern JavaScript modules
- 🌐 **Universal** - Works in browsers and Node.js
- 💪 **TypeScript First** - Full type safety

## 📦 Installation

```bash
# Install specific packages you need
pnpm add @nano-faker/core @nano-faker/person @nano-faker/internet

# Or use npm/yarn
npm install @nano-faker/core @nano-faker/person
yarn add @nano-faker/core @nano-faker/person
```

## 🚀 Quick Start

```typescript
import { setSeed } from '@nano-faker/core';
import { firstName, lastName } from '@nano-faker/person';
import { email } from '@nano-faker/internet';

// Set seed for deterministic output
setSeed(12345);

console.log(firstName()); // Always same output with same seed
console.log(lastName());
console.log(email());
```

## 📚 Packages

### [@nano-faker/core](./packages/core)

Foundation package with seeded random number generation.

```typescript
import { setSeed, random, int, float, pick, shuffle } from '@nano-faker/core';

setSeed(123);
random();              // 0.7234...
int(1, 100);          // 42
float(0, 10, 2);      // 7.23
pick(['a', 'b', 'c']); // 'b'
shuffle([1, 2, 3]);   // [3, 1, 2]
```

### [@nano-faker/number](./packages/number)

Numeric data generation.

```typescript
import { age, id, otp, range } from '@nano-faker/number';

age();           // 42 (18-80)
age(5, 12);      // 8 (custom range)
id();            // "47382910" (8 digits)
id(12);          // "847362910485" (custom length)
otp();           // "472839" (6 digits)
range(0, 100);   // 73
```

### [@nano-faker/person](./packages/person)

Person data with **syllable-based procedural generation** (no large datasets).

```typescript
import { firstName, lastName, fullName, gender } from '@nano-faker/person';

firstName();  // "Alison"
lastName();   // "Anderson"
fullName();   // "Marcus Rodriguez"
gender();     // "female"
```

### [@nano-faker/internet](./packages/internet)

Internet-related data generation.

```typescript
import { email, username, domain, url, ipv4 } from '@nano-faker/internet';

email();     // "sarah.johnson42@gmail.com"
username();  // "sarah_johnson42"
domain();    // "example.com"
url();       // "https://example.com"
ipv4();      // "192.168.1.42"
```

### [@nano-faker/patterns](./packages/patterns)

Format-based generation with placeholders.

```typescript
import { fake } from '@nano-faker/patterns';

fake("USR-####-@@");    // "USR-4728-ab"
fake("###-##-####");    // "472-83-9102" (SSN-like)
fake("***-***-***");    // "a7X-9Bz-K4m"
fake("\\#\\#\\#");      // "###" (escaped)
```

**Placeholders:**
- `#` → digit (0-9)
- `@` → lowercase letter (a-z)
- `*` → alphanumeric
- `\` → escape character

## 🎯 Why nano-faker?

### Bundle Size Comparison

| Library | Size (gzipped) | Tree-shakable |
|---------|---------------|---------------|
| **nano-faker/core** | **< 1KB** | ✅ Yes |
| **nano-faker/person** | **< 500B** | ✅ Yes |
| FakerJS (full) | ~200KB | ⚠️ Partial |

### Philosophy

1. **Import only what you need** - Each function is independently importable
2. **No bloat** - Zero dependencies, minimal code
3. **Deterministic by design** - Perfect for snapshot testing
4. **Modern JavaScript** - ESM-only, no legacy baggage

## 🎲 Deterministic Output

Same seed always produces the same sequence:

```typescript
import { setSeed } from '@nano-faker/core';
import { firstName } from '@nano-faker/person';

setSeed(12345);
console.log(firstName()); // "Alison"

setSeed(12345);
console.log(firstName()); // "Alison" (same!)
```

Perfect for:
- ✅ Snapshot testing
- ✅ Reproducible test data
- ✅ Consistent demos
- ✅ Debugging

## 🌳 Tree-Shaking Example

```typescript
// Only imports what you use - minimal bundle impact
import { firstName } from '@nano-faker/person';
import { email } from '@nano-faker/internet';

// These functions and their dependencies are included
// Everything else is eliminated by your bundler
```

## 🎮 Playground

Try it live! Run the interactive playground:

```bash
pnpm dev:playground
```

Visit `http://localhost:3000` to see all functions in action with live seed control.

## 🏗️ Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Type check
pnpm typecheck
```

## 📖 API Documentation

### Core Functions

- `setSeed(seed: number)` - Set seed for deterministic output
- `getSeed()` - Get current seed value
- `random()` - Random float [0, 1)
- `int(min, max)` - Random integer [min, max]
- `float(min, max, precision)` - Random float with precision
- `pick(array)` - Pick random element from array
- `shuffle(array)` - Shuffle array (returns new array)

See individual package READMEs for complete API documentation.

## 🗺️ Roadmap

- [ ] Additional packages (date, address, company)
- [ ] Locale support (optional, tree-shakable)
- [ ] Advanced patterns (regex-based generation)
- [ ] Performance benchmarks
- [ ] Browser bundle size analyzer
- [ ] More comprehensive documentation

## 🤝 Contributing

Contributions are welcome! This is an open-source project focused on:

1. **Minimal bundle size** - Every byte counts
2. **Tree-shakability** - No barrel exports that bundle everything
3. **Zero dependencies** - Keep it lean
4. **Deterministic** - Seed-based randomness

## 📄 License

MIT © 2026 Rintu Raj C

## 🙏 Acknowledgments

Inspired by FakerJS but built from scratch with a focus on minimal bundle size and modern JavaScript practices.

---

**Built with ❤️ for developers who care about bundle size**
