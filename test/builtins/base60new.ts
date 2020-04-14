import { expect } from 'chai';

import { commonTestsFrom, commonTestsTo } from '../common';
import { charset, convertFrom, convertTo } from '../../src/builtins/base60new';

describe('convert from base60new', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: 'ASD123',
      output: 8115771723,
    },
    // {
    //   input: 'BuR.7V7geffAPn',
    //   output: 45783.121,
    // },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).to.equal(output);
    });
  });
});

describe('convert to base60new', () => {
  const tests: {
    input: number,
    output: string,
  }[] = [
    ...commonTestsTo(charset),
    {
      input: -1337,
      output: '-NH',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).to.equal(output);
    });
  });
});
