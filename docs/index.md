# zod-utils-js Documentation

Reusable utility functions to simplify Zod schema creation in JavaScript.

---

## 📦 Installation

```bash
npm install zod-utils-js
```

> Note: Make sure `zod` is also installed as a peer dependency if not already.

```bash
npm install zod
```

---

## 📘 API Reference

### `createZodSchema(shape)`

Creates a Zod object schema from a plain shape object.

```js
import { createZodSchema } from 'zod-utils-js';

const schema = createZodSchema({
  name: z.string(),
  age: z.number(),
});

schema.parse({ name: 'Alice', age: 30 }); // ✅
```

---

### `positiveNumber()`

Returns a Zod number schema that only allows positive numbers.

```js
import { positiveNumber } from 'zod-utils-js';

const ageSchema = positiveNumber();
ageSchema.parse(10); // ✅
ageSchema.parse(-5); // ❌
```

---

### `rangedNumber(min, max)`

Creates a Zod number schema with optional min and max constraints.

```js
import { rangedNumber } from 'zod-utils-js';

const ratingSchema = rangedNumber(1, 5);
ratingSchema.parse(3); // ✅
ratingSchema.parse(0); // ❌
```

---

## 🛠 Usage Example

```js
import { createZodSchema, rangedNumber } from 'zod-utils-js';

const schema = createZodSchema({
  rating: rangedNumber(0, 10),
});

schema.parse({ rating: 7 }); // ✅
schema.parse({ rating: 15 }); // ❌
```

---

## 📄 License

MIT © Maung Shine
