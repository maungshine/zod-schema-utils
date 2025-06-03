import { z } from 'zod';

/**
 * Returns a trimmed string schema that converts empty strings to undefined.
 * @param {Object} options
 * @param {boolean} [options.optional=false]
 * @param {boolean} [options.nullable=false]
 * @returns {z.ZodString}
 */
export function trimmedString({ optional = false, nullable = false } = {}) {
  let schema = z.string().transform((val) => val.trim()).refine(val => val.length > 0, {
    message: "String cannot be empty",
  }).or(z.literal("")); // to allow empty string for transform

  schema = schema.transform((val) => val === "" ? undefined : val);

  if (optional) schema = schema.optional();
  if (nullable) schema = schema.nullable();

  return schema;
}
