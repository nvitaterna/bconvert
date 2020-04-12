import { expect } from 'chai';
import Converter from '.';
import { charset as base64 } from '../builtins/base64';

describe('Convert to base16', () => {
  const charsetA = '0123456789ABCDEF';
  describe('from binary', () => {
    const charsetB = '01';
    const converter = new Converter(charsetA, charsetB, 10);
    const tests = [
      {
        input: '1100',
        output: 'C',
      }, {
        input: '111001',
        output: '39',
      }, {
        input: '1011.1',
        output: 'B.8',
      },
    ];
    tests.forEach(({ output, input }) => {
      it(`should return "${output}" when converting from ${input}`, () => {
        expect(converter.convertTo(input)).to.equal(output);
      });
    });
  });
});

describe('Convert from base8', () => {
  const charsetA = '01234567';
  describe('from base64', () => {
    const charsetB = base64;
    const converter = new Converter(charsetB, charsetA);
    const tests = [
      {
        input: 'I/.I',
        output: '1077.1',
      }, {
        input: 'H.E',
        output: '7.04',
      }, {
        input: 'BA',
        output: '100',
      },
    ];
    tests.forEach(({ output, input }) => {
      it(`should return "${output}" when converting from ${input}`, () => {
        expect(converter.convertFrom(input)).to.equal(output);
      });
    });
  });
});
