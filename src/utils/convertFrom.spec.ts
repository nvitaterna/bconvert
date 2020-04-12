import { expect } from 'chai';
import convertFrom from './convertFrom';
import { commonTestsFrom as commonTests } from '../index.spec';

const binary = '01';

describe('Convert To', () => {
  describe('binary', () => {
    const convert = (value: string) => convertFrom(value, binary);
    const tests = [
      ...commonTests(binary),
      {
        input: '-10100111001',
        output: -1337,
      },
      {
        input: '1011.1011',
        output: 11.6875,
      },
    ];

    tests.forEach(({ output, input }) => {
      it(`should return "${output}" when converting from ${input}`, () => {
        expect(convert(input)).to.equal(output);
      });
    });
  });
});
