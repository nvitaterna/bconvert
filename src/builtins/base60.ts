import * as utils from '@/utils';

/**
 * base60 charset 0-9 A-Z a-x
 */
export const charset =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx';

/**
 * Function to convert from base10 to base60
 * @param value - number in base10 to convert to base60
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from base60 to base10
 * @param value - string in base60 to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
