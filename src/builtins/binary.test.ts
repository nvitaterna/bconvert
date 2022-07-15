import { commonTestsFrom, commonTestsTo } from '../../test-utils/common.test';
import { charset, convertFrom, convertTo } from '../../src/builtins/binary';

describe('convert from binary', () => {
  const tests = [
    ...commonTestsFrom(charset),
    {
      input: '-10100111001',
      output: -1337,
    },
    // {
    //   input: '10000.01',
    //   output: 16.25,
    // },
  ];

  tests.forEach(({ output, input }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertFrom(input)).toEqual(output);
    });
  });
});

describe('convert to binary', () => {
  const tests: {
    input: number;
    output: string;
  }[] = [
    ...commonTestsTo(charset),
    {
      input: -42,
      output: '-101010',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(`should return "${output}" when converting from ${input}`, () => {
      expect(convertTo(input)).toEqual(output);
    });
  });
});
