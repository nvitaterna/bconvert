import { commonTestsFrom, commonTestsTo } from '../../test-utils/common.test';
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
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to base60', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: 626262,
      output: '2rvg',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
