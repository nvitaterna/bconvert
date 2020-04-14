import { expect } from 'chai';

import { commonTestsFrom, commonTestsTo } from '../common';
import { charset, convertFrom, convertTo } from '../../src/builtins/octal';

describe('convert from octal', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-2471',
      output: -1337,
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

describe('convert to octal', () => {
  const tests: {
    input: number,
    output: string,
  }[] = [
    ...commonTestsTo(charset),
    {
      input: 420,
      output: '644',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).to.equal(output);
    });
  });
});
