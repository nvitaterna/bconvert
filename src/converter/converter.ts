import { convertFrom, convertTo } from '@/utils';

/**
 * Converter class to convert between to different number bases
 */
export default class Converter {
  /**
   * @param to - what convertTo will convert to
   * @param from - what convertFrom will convert to
   */
  constructor(private to: string, private from: string) {}

  /**
   * Function to convert to the `to` number base from the `from` number base
   * @param value - number in base `from` to convert to base `to`
   * @returns number in base `to`
   */
  convertTo(value: number | string) {
    return convertTo(convertFrom(value, this.from), this.to);
  }

  /**
   * Function to convert from the `to` number base to the `from` number base
   * @param value - number in base `to` to convert to base `from`
   * @returns number in base `from`
   */
  convertFrom(value: number | string) {
    return convertTo(convertFrom(value, this.to), this.from);
  }
}
