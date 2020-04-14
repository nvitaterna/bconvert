import Converter from './converter';
import { convertFrom, convertTo } from './utils';
import * as builtins from './builtins';

export { default as Converter } from './converter';
export { convertFrom, convertTo } from './utils';
export { base62, base64, base64url } from './builtins';

export default {
  Converter,
  convertFrom,
  convertTo,
  ...builtins,
};
