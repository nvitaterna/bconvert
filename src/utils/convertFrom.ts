/**
 * Function to convert from any base to base10
 * @param value - number in the given base to convert to base10
 * @param charset - charset of the base you want to convert from
 * @returns number in base10
 */
export default function convertFrom(value: number | string, charset: string) {
  const radix = charset.length;
  let result = 0;
  const strValue = value.toString();

  if (strValue.includes('.')) {
    throw new Error('This library cannot convert fractions at this time.');
  }

  const negative = strValue[0] === '-';
  const absValue = strValue.replace('-', '');

  absValue.split('').forEach((valChar) => {
    if (!charset.includes(valChar)) {
      throw new Error(
        `Value must only consist of characters from the given charset. "${valChar}" is not in ${charset}`,
      );
    }
  });

  absValue.split('').forEach((part) => {
    result = result * radix + charset.indexOf(part);
  });

  if (negative) {
    result *= -1;
  }

  return result;
}
