/**
 * Function to convert to any base from base10
 * @param value - number in base10 to convert to the given base
 * @param charset - charset of the base you want to convert to
 * @param precision - number of digits to appear after the decimal point if converting decimals
 * @returns number in the given base
 */
export default function convertTo(value: number, charset: string, precision = 10) {
  const radix = charset.length;

  const negative = value < 0;

  const absValue = Math.abs(value);

  let intRemaining = Math.floor(absValue);
  let decimalRemaining = absValue - intRemaining;
  let result: string | number = '';

  // do integer
  do {
    const index = intRemaining % radix;
    result = charset[index] + result;

    intRemaining = Math.floor(intRemaining / radix);
  } while (intRemaining > 0);
  // do decimal
  if (decimalRemaining !== 0) {
    decimalRemaining = Number(decimalRemaining.toFixed(precision));
    result += '.';
    let loops = 0;

    while ((loops < precision && decimalRemaining > 0)) {
      const current = decimalRemaining * radix;
      result += charset[Math.floor(current)];
      decimalRemaining = Number((current - Math.floor(current)).toFixed(precision));
      loops += 1;
    }
  }

  if (negative) {
    result = `-${result}`;
  }
  // if (radix <= 10) {
  //   result = parseFloat(result);
  // }
  return result;
}
