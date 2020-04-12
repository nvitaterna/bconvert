import { expect } from 'chai';
import convertTo from './convertTo';
import { commonTestsTo as commonTests } from '../index.spec';

const binary = '01';

describe('Convert To', () => {
  describe('binary', () => {
    const convert = (value: number) => convertTo(value, binary);
    const tests = [
      ...commonTests(binary),
      {
        input: -1337,
        output: '-10100111001',
      },
      {
        input: 11.6875,
        output: '1011.1011',
      },
    ];

    tests.forEach(({ input, output }) => {
      it(`should return "${output}" when converting from ${input}`, () => {
        expect(convert(input)).to.equal(output);
      });
    });
  });
});
