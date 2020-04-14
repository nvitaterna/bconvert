import * as utils from '../utils';

/**
 * base60new charset 0-9 A-H J-N P-Z _ a-k m-z
 */
export const charset = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz';

/**
 * Function to convert from base10 to base60new
 * @param value - number in base10 to convert to base60new
 */
export const convertTo = function convertTo(value: number) {
  return utils.convertTo(value, charset);
};

/**
 * Function to convert from base60new to base10
 * @param value - string in base60new to convert to base10
 */
export const convertFrom = function convertFrom(value: string) {
  return utils.convertFrom(value, charset);
};
