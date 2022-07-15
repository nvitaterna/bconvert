import { commonTestsFrom, commonTestsTo } from '@test-utils/common.test';
import { charset, convertFrom, convertTo } from '../../src/builtins/base62';

describe('convert from base62', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-LZ',
      output: -1337,
    },
    // {
    //   input: 'BuR.7V7geffAPn',
    //   output: 45783.121,
    // },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to base62', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: -1337,
      output: '-LZ',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
