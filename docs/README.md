# zod-schema-utils

Utility functions to simplify working with [Zod](https://github.com/colinhacks/zod) schemas.

---

## Features

- Create reusable Zod schemas for positive numbers, ranged numbers, and trimmed strings.
- Date parsing helpers and ISO date validation.
- Helpers for optional and nullable fields.
- Enum validation with custom error messages.
- Easy-to-use schema building utilities.

---

## Installation

```bash
npm install zod-schema-utils
````

---

## Usage

Import the utilities you need:

```js
import { 
  positiveNumber, 
  rangedNumber, 
  trimmedString, 
  enumWithMessage,
  isoDate,
  optionalNullable
} from 'zod-schema-utils';

// Example: positive number schema
const ageSchema = positiveNumber().min(18);

// Example: enum with custom message
const colorSchema = enumWithMessage(['red', 'green', 'blue'], 'Invalid color selected');

// Example: optional nullable trimmed string
const nameSchema = optionalNullable(trimmedString());

```

---

## Documentation

For detailed API and docs, see the [generated documentation](./docs/index.html).

---

## Contributing

Contributions, issues, and feature requests are welcome!

---

## License

Licensed under the Apache License 2.0. See the LICENSE file for details.
