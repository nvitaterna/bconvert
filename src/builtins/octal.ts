import * as utils from '../utils';

/**
 * octal charset
 */
export const charset = '01234567';

/**
 * Function to convert from base10 to octal
 * @param value - number in base10 to convert to octal
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from octal to base10
 * @param value - string in octal to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
