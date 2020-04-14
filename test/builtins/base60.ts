import { expect } from 'chai';

import { commonTestsFrom, commonTestsTo } from '../common';
import { charset, convertFrom, convertTo } from '../../src/builtins/base60';

describe('convert from base60', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-HAHA',
      output: -3709030,
    },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).to.equal(output);
    });
  });
});

describe('convert to base60', () => {
  const tests: {
    input: number,
    output: string,
  }[] = [
    ...commonTestsTo(charset),
    {
      input: 626262,
      output: '2rvg',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).to.equal(output);
    });
  });
});
