import * as utils from '../utils';

/**
 * base62 charset 0-9 A-Z a-z
 */
export const charset =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

/**
 * Function to convert from base10 to base62
 * @param value - number in base10 to convert to base62
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from base62 to base10
 * @param value - string in base62 to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
