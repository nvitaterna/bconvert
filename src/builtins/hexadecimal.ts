import * as utils from '../utils';

/**
 * hexadecimal charset
 */
export const charset = '0123456789ABCDEF';

/**
 * Function to convert from base10 to hexadecimal
 * @param value - number in base10 to convert to hexadecimal
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from hexadecimal to base10
 * @param value - string in hexadecimal to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
