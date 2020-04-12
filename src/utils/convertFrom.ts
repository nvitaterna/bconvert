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
  const negative = strValue[0] === '-';
  const absValue = strValue.replace('-', '');

  const intValue = absValue.split('.')[0];
  const decimalvalue = absValue.split('.')[1];

  intValue.split('').forEach((part) => {
    result = result * radix + charset.indexOf(part);
  });

  if (decimalvalue) {
    let decimalResult = 0;
    decimalvalue.split('').forEach((part, i) => {
      decimalResult = (charset.indexOf(part) / (radix ** (i + 1))) + decimalResult;
    });
    result += decimalResult;
  }

  if (negative) {
    result *= -1;
  }


  return result;
}
