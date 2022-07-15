import { commonTestsFrom, commonTestsTo } from '@test-utils/common.test';
import { charset, convertFrom, convertTo } from './base32';

describe('convert from base32', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-BJZ',
      output: -1337,
    },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to base32', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: -46500,
      output: '-BNNE',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
