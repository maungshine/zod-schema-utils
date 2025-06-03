import { z } from 'zod';

/**
 * Creates a Zod object schema from a shape object.
 * @param {Object} shape - Object defining Zod shape (e.g., { name: z.string() })
 * @returns {z.ZodObject} Zod schema
 */
export function createZodSchema(shape) {
  return z.object(shape);
}
