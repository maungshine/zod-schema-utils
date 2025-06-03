import { z } from 'zod';

/**
 * Parses string or number input into a Date object, validates it.
 * @param {Object} options
 * @param {boolean} [options.optional=false]
 * @param {boolean} [options.nullable=false]
 * @returns {z.ZodDate}
 */
export function parsedDate({ optional = false, nullable = false } = {}) {
  let schema = z.preprocess((arg) => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      const date = new Date(arg);
      if (!isNaN(date.getTime())) return date;
    }
    return arg;
  }, z.date());

  if (optional) schema = schema.optional();
  if (nullable) schema = schema.nullable();

  return schema;
}

/**
 * Creates a Zod date schema that validates a date string in ISO format.
 * @param {Object} options
 * @param {boolean} [options.optional=false]
 * @param {boolean} [options.nullable=false]
 * @returns {z.ZodDate}
 */
export function isoDate({ optional = false, nullable = false } = {}) {
  let schema = z.string().refine((val) => {
    const date = new Date(val);
    return !isNaN(date.getTime()) && date.toISOString() === val;
  }, {
    message: 'Invalid ISO date string',
  }).transform((val) => new Date(val));

  if (optional) schema = schema.optional();
  if (nullable) schema = schema.nullable();

  return schema;
}