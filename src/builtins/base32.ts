import * as utils from '../utils';

/**
 * base32 charset A-Z 2-7
 */
export const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

/**
 * Function to convert from base10 to base32
 * @param value - number in base10 to convert to base32
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from base32 to base10
 * @param value - string in base32 to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
