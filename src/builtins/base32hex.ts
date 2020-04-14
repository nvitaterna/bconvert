import * as utils from '../utils';

/**
 * base32hex charset 0-9 A-V
 */
export const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUV';

/**
 * Function to convert from base10 to base32hex
 * @param value - number in base10 to convert to base32hex
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from base32hex to base10
 * @param value - string in base32hex to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
