import * as utils from '../utils';

/**
 * base60new charset 0-9 A-H J-N P-Z _ a-k m-z
 */
export const charset = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz';

/**
 * Function to convert from base10 to base60new
 * @param value - number in base10 to convert to base60new
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from base60new to base10
 * @param value - string in base60new to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
