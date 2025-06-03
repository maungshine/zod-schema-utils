
# zod-utils

Reusable utility functions for building and validating Zod schemas in JavaScript.

## ✨ Features

- Create reusable Zod object schemas
- Validate numbers with constraints like positive, min, max
- Will be adding more
- Lightweight and simple utility

## 📦 Installation

```bash
npm install zod-utils
```

> Make sure `zod` is installed if it’s not already.

## 📚 Usage

```js
import { createZodSchema, positiveNumber, rangedNumber } from 'zod-utils';

const schema = createZodSchema({
  age: positiveNumber(),
  score: rangedNumber(0, 100)
});

schema.parse({ age: 25, score: 88 }); // ✅
```

## 🧩 API

### `createZodSchema(shape: object): ZodObject`

Wraps a plain shape object into a `z.object`.

### `positiveNumber(): ZodNumber`

Returns a Zod number schema that only allows positive numbers.

### `rangedNumber(min?: number, max?: number): ZodNumber`

Returns a Zod number schema with optional `min` and `max` range.

## 🛠️ Development

To run locally:

```bash
npm install
```

To publish (CI handles this):

```bash
npm version patch  # or minor/major
git push --tags    # triggers GitHub Actions
```

## 📄 License

MIT © Maung Shine