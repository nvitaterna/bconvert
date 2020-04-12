import { expect } from 'chai';

import { commonTestsFrom, commonTestsTo } from '../index.spec';
import { charset, convertFrom, convertTo } from './base62';

describe('convert from base62', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-LZ',
      output: -1337,
    },
    {
      input: 'BuR.7V7geffAPn',
      output: 45783.121,
    },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).to.equal(output);
    });
  });
});

describe('convert to base62', () => {
  const tests: {
    input: number,
    output: string,
    precision?: number
  }[] = [
    ...commonTestsTo(charset),
    {
      input: -1337,
      output: '-LZ',
    },
    {
      input: 45783.121,
      output: 'BuR.7V7gef',
      precision: 6,
    },
  ];

  tests.forEach(({ input, output, precision }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input, precision)).to.equal(output);
    });
  });
});
