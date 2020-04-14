import { expect } from 'chai';
import { convertFrom } from '../src';
import { commonTestsFrom as commonTests } from './common';
import { charset } from '../src/builtins/binary';

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
          expect(() => convert(input)).to.throw();
        });
      } else if (!input.replace('-', '').split('').every((x) => charset.includes(x))) {
        it('should throw error for trying to convert characters that are not in the base', () => {
          expect(() => convert(input)).to.throw();
        });
      } else {
        it(`should return "${output}" when converting from ${input}`, () => {
          expect(convert(input)).to.equal(output);
        });
      }
    });
  });
});
