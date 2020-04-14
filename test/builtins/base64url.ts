import { expect } from 'chai';

import { commonTestsFrom, commonTestsTo } from '../common';
import { charset, convertFrom, convertTo } from '../../src/builtins/base64url';

describe('convert from base64url', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: 'U5',
      output: 1337,
    },
    // {
    //   input: 'O.BR64UeuFHr',
    //   output: 14.02,
    // },
  ];

  // can't do negative or decimals for base64url
  tests.filter(({ output }) => !(output < 0 || output.toString().split('.')[1] !== undefined)).forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).to.equal(output);
    });
  });
});

describe('convert to base64url', () => {
  const tests: {
    input: number,
    output: string,
  }[] = [
    ...commonTestsTo(charset),
    {
      input: 1337,
      output: 'U5',
    },
  ];

  tests.forEach(({ input, output }) => {
    if (input < 0 || input.toString().split('.')[1] !== undefined) {
      it('should throw error for trying to convert invalid number', () => {
        expect(() => convertTo(input)).to.throw();
      });
    } else {
      it(`should return "${output}" when converting from ${input}`, () => {
        expect(convertTo(input)).to.equal(output);
      });
    }
  });
});
