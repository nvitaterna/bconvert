import Converter from './';
import { charset as base64 } from '../builtins/base64';

describe('Converter convert to base16', () => {
  const charsetA = '0123456789ABCDEF';
  describe('from binary', () => {
    const charsetB = '01';
    const converter = new Converter(charsetA, charsetB /* , 10 */);
    const tests = [
      {
        input: '1100',
        output: 'C',
      },
      {
        input: '111001',
        output: '39',
      },
    ];
    tests.forEach(({ output, input }) => {
      it(`should return "${output}" when converting from ${input}`, () => {
        expect(converter.convertTo(input)).toEqual(output);
      });
    });
  });
});

describe('Converter convert from base8', () => {
  const charsetA = '01234567';
  describe('from base64', () => {
    const charsetB = base64;
    const converter = new Converter(charsetB, charsetA);
    const tests = [
      {
        input: 'I/',
        output: '1077',
      },
      {
        input: 'BA',
        output: '100',
      },
    ];
    tests.forEach(({ output, input }) => {
      it(`should return "${output}" when converting from ${input}`, () => {
        expect(converter.convertFrom(input)).toEqual(output);
      });
    });
  });
});
