import { convertTo } from '../';
import { commonTestsTo as commonTests } from '../../test-utils/common.test';

const binary = '01';

describe('convertTo', () => {
  describe('binary', () => {
    const convert = (value: number) => convertTo(value, binary);
    const tests = [
      ...commonTests(binary),
      {
        input: -1337,
        output: '-10100111001',
      },
      {
        input: 11.6875,
        output: 'blah',
      },
    ];

    tests.forEach(({ input, output }) => {
      if (input.toString().includes('.')) {
        it('should throw error for trying to convert a fraction', () => {
          expect(() => convert(input)).toThrow();
        });
      } else {
        it(`should return "${output}" when converting from ${input}`, () => {
          expect(convert(input)).toEqual(output);
        });
      }
    });
  });
});
