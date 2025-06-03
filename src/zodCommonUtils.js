import { z } from 'zod';

/**
 * Wraps a Zod schema to be optional and/or nullable.
 * @param {z.ZodTypeAny} schema - The base schema
 * @param {Object} options
 * @param {boolean} [options.optional=false]
 * @param {boolean} [options.nullable=false]
 * @returns {z.ZodTypeAny}
 */
export function optionalNullable(schema, { optional = false, nullable = false } = {}) {
  let result = schema;
  if (optional) result = result.optional();
  if (nullable) result = result.nullable();
  return result;
}
