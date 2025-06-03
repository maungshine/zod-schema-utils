import { z } from 'zod';

/**
 * Creates a Zod enum with custom error message.
 * @param {Array<string>} values - Enum values
 * @param {string} errorMessage - Custom error message
 * @returns {z.ZodEnum}
 */
export function enumWithMessage(values, errorMessage) {
  return z.enum(values).refine(val => values.includes(val), {
    message: errorMessage,
  });
}
