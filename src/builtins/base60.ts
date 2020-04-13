import * as utils from '../utils';

/**
 * base60 charset 0-9 A-Z a-x
 */
export const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx';

/**
 * Function to convert from base10 to base60
 * @param value - number in base10 to convert to base60
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from base60 to base10
 * @param value - string in base60 to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
