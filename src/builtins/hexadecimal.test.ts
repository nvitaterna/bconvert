import { commonTestsFrom, commonTestsTo } from '@test-utils/common.test';
import {
  charset,
  convertFrom,
  convertTo,
} from '../../src/builtins/hexadecimal';

describe('convert from hexadecimal', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-AF',
      output: -175,
    },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to hexadecimal', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: 1337,
      output: '539',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
