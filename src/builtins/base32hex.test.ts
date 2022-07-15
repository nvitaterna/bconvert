import { commonTestsFrom, commonTestsTo } from '../../test-utils/common.test';
import { charset, convertFrom, convertTo } from './base32hex';

describe('convert from base32hex', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-BJJ',
      output: -11891,
    },
    // {
    //   input: '36B.AB',
    //   output: 45783.121,
    // },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to base32hex', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: -1337,
      output: '-19P',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
