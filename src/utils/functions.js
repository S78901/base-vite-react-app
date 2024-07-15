/**
 * Check for whether an array actually exists or is empty
 * @param arr - an array
 * @returns a boolean
 */

export const isArrPresent = arr => Array.isArray(arr) && arr.length;
