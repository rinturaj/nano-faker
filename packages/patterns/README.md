# @nano-faker/patterns

> Pattern-based fake data generation for nano-faker

## Installation

```bash
pnpm add @nano-faker/core @nano-faker/patterns
```

## Usage

```typescript
import { setSeed } from '@nano-faker/core';
import { fake } from '@nano-faker/patterns';

setSeed(12345);

fake("USR-####-@@");    // "USR-4728-ab"
fake("###-##-####");    // "472-83-9102" (SSN-like)
fake("***-***-***");    // "a7X-9Bz-K4m"
fake("Order-#####");    // "Order-47382"
```

## Placeholders

| Placeholder | Description | Example |
|------------|-------------|---------|
| `#` | Random digit (0-9) | `5` |
| `@` | Random lowercase letter (a-z) | `m` |
| `*` | Random alphanumeric | `K` |
| `\` | Escape character | `\#` → `#` |

## Examples

### User IDs
```typescript
fake("USR-####-@@@@");  // "USR-4728-abcd"
```

### License Keys
```typescript
fake("****-****-****-****");  // "a7X9-BzK4-mP2q-R8vN"
```

### SSN-like Patterns
```typescript
fake("###-##-####");  // "472-83-9102"
```

### Escaped Characters
```typescript
fake("\\#\\#\\#");  // "###" (literal)
fake("ID-\\#-####");  // "ID-#-4728"
```

## API

### `fake(pattern: string): string`

Generate fake data based on a pattern string.

**Parameters:**
- `pattern` - Pattern string with placeholders

**Returns:** Generated string matching the pattern

**Example:**
```typescript
fake("USR-####-@@");  // "USR-4728-ab"
```

## License

MIT
