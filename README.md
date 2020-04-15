# bconvert

[![dependencies Status](https://flat.badgen.net/david/dep/nvitaterna/bconvert)](https://david-dm.org/nvitaterna/bconvert)
[![Coverage Status](https://flat.badgen.net/coveralls/c/github/nvitaterna/bconvert/master)](https://coveralls.io/github/nvitaterna/bconvert?branch=master)
[![Build Status](https://flat.badgen.net/travis/nvitaterna/bconvert/master)](https://travis-ci.org/nvitaterna/bconvert)
[![npm version](https://flat.badgen.net/npm/v/bconvert)](https://www.npmjs.com/package/bconvert)

```js
const bconvert = require('bconvert');

const hexCharset = '0123456789ABCDEF';

bconvert.convertTo(30, hexCharset);
// 1E
```

This is a library to convert to and from any base, including custom character sets. No dependencies.

## Install

bconvert is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/). You can install bconvert in your project's directory like any other package:

NPM  
`npm i bconvert`

Yarn  
`yarn add bconvert`

## Documentation

[Advanced Documentation](https://github.com/nvitaterna/bconvert/blob/master/docs/README.md)

```js
const bconvert = require('bconvert');
```
or  
```js
import bconvert from 'bconvert';
```

After requiring or importing bconvert you have access to the following:

### Converting via base10

#### Convert to any base

```js
const charset = '01';

console.log(bconvert.convertTo(5, charset);)
// 101
```

#### Convert from any base
```js
const charset = bconvert.base64.charset;
// built in base64 charset

console.log(bconvert.convertFrom('U5', charset);)
// 1337
```

### Converting between bases
```js
const Converter = bconvert.Converter;

const charsetTo = '0123456789ABCDEF';

const charsetFrom = '01';

const binaryHexConverter = new Converter(charsetTo, charsetFrom);

console.log(binaryHexConverter.convertTo('101101'));
// 2D

console.log(binaryHexConverter.convertFrom('FFE1'));
// 1111111111100001
```

### Built-in Bases
The following number base systems are included in this package:
```
binary
octal
hexadecimal
base32
base32hex
base57
base60
base60new
base62
base64
base64url
```

To use these builtins, you may import/require them directly or access them at `bconvert[builtinName]`. All builtins export their charset, as well as `convertTo` and `convertFrom`:
```js
const hexadecimal = require('bconvert/builtins/hexadecimal');
// or
const bconvert = require('bconvert');
hexadecimal = bconvert.hexadecimal;

hexadecimal.charset;
// 0123456789ABCDEF

hexadecimal.convertTo(28);
// 1C

hexadecimal.convertFrom('1337');
// 4919
```
