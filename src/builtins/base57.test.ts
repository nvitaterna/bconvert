import { commonTestsFrom, commonTestsTo } from '@test-utils/common.test';
import { charset, convertFrom, convertTo } from '../../src/builtins/base57';

describe('convert from base57', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-RU',
      output: -1337,
    },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to base57', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: 43829,
      output: 'FVw',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
