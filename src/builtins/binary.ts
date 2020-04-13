import * as utils from '../utils';

/**
 * binary charset
 */
export const charset = '01';

/**
 * Function to convert from base10 to binary
 * @param value - number in base10 to convert to binary
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from binary to base10
 * @param value - string in binary to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
