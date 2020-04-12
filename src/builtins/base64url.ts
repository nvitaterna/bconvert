/**
 * Built in base64url converter
 */
import * as utils from '../utils';

/**
 * base64url charset
 */
export const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

/**
 * Function to convert from base10 to base64url
 * @param value - number in base10 to convert to base64url
 * @param precision - number of digits to appear after the decimal point if converting decimals
 */
export const convertTo = function convertTo(value: number, precision = 10) {
  if (value < 0 || value.toString().split('.')[1] !== undefined) {
    throw new Error('base64url can only convert positive integers');
  }
  return utils.convertTo(value, charset, precision);
};

/**
 * Function to convert from base64url to base10
 * @param value - string in base64url to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
