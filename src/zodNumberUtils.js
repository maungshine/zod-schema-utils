import { z } from 'zod';

/**
 * Returns a Zod number schema that allows only positive numbers.
 * @returns {z.ZodNumber}
 */
export function positiveNumber() {
  return z.number().positive();
}

/**
 * Returns a Zod number schema with optional min and max range.
 * @param {number} [min] - Minimum value
 * @param {number} [max] - Maximum value
 * @returns {z.ZodNumber}
 */
export function rangedNumber(min, max) {
  let schema = z.number();
  if (min !== undefined) schema = schema.min(min);
  if (max !== undefined) schema = schema.max(max);
  return schema;
}
