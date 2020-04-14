/**
 * Function to convert to any base from base10
 * @param value - number in base10 to convert to the given base
 * @param charset - charset of the base you want to convert to
 * @returns number in the given base
 */
export default function convertTo(value: number, charset: string) {
  if (value.toString().includes('.')) {
    throw new Error('This library cannot convert fractions at this time.');
  }
  const radix = charset.length;

  const negative = value < 0;

  const absValue = Math.abs(value);
  let remaining = absValue;
  let result: string | number = '';

  // do integer
  do {
    const index = remaining % radix;
    result = charset[index] + result;

    remaining = Math.floor(remaining / radix);
  } while (remaining > 0);

  if (negative) {
    result = `-${result}`;
  }

  return result;
}
