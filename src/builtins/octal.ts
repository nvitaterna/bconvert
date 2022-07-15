import * as utils from '@/utils';

/**
 * octal charset
 */
export const charset = '01234567';

/**
 * Function to convert from base10 to octal
 * @param value - number in base10 to convert to octal
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from octal to base10
 * @param value - string in octal to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
