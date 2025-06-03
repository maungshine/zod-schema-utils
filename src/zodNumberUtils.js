import { z } from 'zod';

/**
 * Returns a Zod number schema that allows only positive numbers.
 *
 * @param {Object} [options] - Options to customize schema
 * @param {boolean} [options.optional=false] - Allow undefined
 * @param {boolean} [options.nullable=false] - Allow null
 * @returns {z.ZodNumber} Zod number schema
 */
export function positiveNumber({ optional = false, nullable = false } = {}) {
  let schema = z.number().positive();
  if (optional) schema = schema.optional();
  if (nullable) schema = schema.nullable();
  return schema;
}

/**
 * Returns a Zod number schema with optional min and max constraints.
 *
 * @param {number} [min] - Minimum value (inclusive)
 * @param {number} [max] - Maximum value (inclusive)
 * @param {Object} [options] - Options to customize schema
 * @param {boolean} [options.optional=false] - Allow undefined
 * @param {boolean} [options.nullable=false] - Allow null
 * @returns {z.ZodNumber} Zod number schema
 */
export function rangedNumber(min, max, { optional = false, nullable = false } = {}) {
  let schema = z.number();
  if (min !== undefined) schema = schema.min(min);
  if (max !== undefined) schema = schema.max(max);
  if (optional) schema = schema.optional();
  if (nullable) schema = schema.nullable();
  return schema;
}
