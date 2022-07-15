import * as utils from '@/utils';

/**
 * base64 charset
 */
export const charset =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/**
 * Function to convert from base10 to base64
 * @param value - number in base10 to convert to base64
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from base64 to base10
 * @param value - string in base64 to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
