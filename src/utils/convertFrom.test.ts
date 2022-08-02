import convertFrom from './convertFrom';
import { commonTestsFrom as commonTests } from '@test-utils/common.test';
import { charset } from '../builtins/binary';

describe('convertFrom Convert To', () => {
  describe('binary', () => {
    const convert = (value: string) => convertFrom(value, charset);
    const tests = [
      ...commonTests(charset),
      {
        input: '-10100111001',
        output: -1337,
      },
      {
        input: '1011.1011',
        output: 11.6875,
      },
      {
        input: '4871',
        output: 0,
      },
    ];

    tests.forEach(({ output, input }) => {
      if (input.includes('.')) {
        it('should throw error for trying to convert a fraction', () => {
          expect(() => convert(input)).toThrow();
        });
      } else if (
        !input
          .replace('-', '')
          .split('')
          .every((x) => charset.includes(x))
      ) {
        it('should throw error for trying to convert characters that are not in the base', () => {
          expect(() => convert(input)).toThrow();
        });
      } else {
        it(`should return "${output}" when converting from ${input}`, () => {
          expect(convert(input)).toEqual(output);
        });
      }
    });
  });
});
