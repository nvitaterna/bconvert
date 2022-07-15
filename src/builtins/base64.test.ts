import { commonTestsFrom, commonTestsTo } from '../../test-utils/common.test';
import { charset, convertFrom, convertTo } from '../../src/builtins/base64';

describe('convert from base64', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-U5',
      output: -1337,
    },
    // {
    //   input: 'O.BR64UeuFHr',
    //   output: 14.02,
    // },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to base64', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: -1337,
      output: '-U5',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
