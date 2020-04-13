import * as utils from '../utils';

/**
 * base57 charset 2-9 A-H J-N P-Z a-k m-z
 */
export const charset = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

/**
 * Function to convert from base10 to base57
 * @param value - number in base10 to convert to base57
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from base57 to base10
 * @param value - string in base57 to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
