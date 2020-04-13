import * as utils from '../utils';

/**
 * base32hex charset 0-9 A-V
 */
export const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUV';

/**
 * Function to convert from base10 to base32hex
 * @param value - number in base10 to convert to base32hex
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from base32hex to base10
 * @param value - string in base32hex to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
