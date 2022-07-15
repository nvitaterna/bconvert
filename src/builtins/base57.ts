import * as utils from '../utils';

/**
 * base57 charset 2-9 A-H J-N P-Z a-k m-z
 */
export const charset =
  '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

/**
 * Function to convert from base10 to base57
 * @param value - number in base10 to convert to base57
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from base57 to base10
 * @param value - string in base57 to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
