
# Class: Converter

Converter class to convert between to different number bases

## Hierarchy

* **Converter**

## Index

### Constructors

* [constructor](_converter_converter_.converter.md#constructor)

### Properties

* [from](_converter_converter_.converter.md#private-from)
* [precision](_converter_converter_.converter.md#private-precision)
* [to](_converter_converter_.converter.md#private-to)

### Methods

* [convertFrom](_converter_converter_.converter.md#convertfrom)
* [convertTo](_converter_converter_.converter.md#convertto)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new Converter**(`to`: string, `from`: string, `precision`: number): *[Converter](_converter_converter_.converter.md)*

*Defined in [converter/converter.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L6)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`to` | string | - | what convertTo will convert to |
`from` | string | - | what convertFrom will convert to |
`precision` | number | 10 | number of digits to appear after the decimal point if converting decimals  |

**Returns:** *[Converter](_converter_converter_.converter.md)*

## Properties

### <a id="private-from" name="private-from"></a> `Private` from

• **from**: *string*

*Defined in [converter/converter.ts:14](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L14)*

what convertFrom will convert to

___

### <a id="private-precision" name="private-precision"></a> `Private` precision

• **precision**: *number*

*Defined in [converter/converter.ts:15](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L15)*

number of digits to appear after the decimal point if converting decimals

___

### <a id="private-to" name="private-to"></a> `Private` to

• **to**: *string*

*Defined in [converter/converter.ts:13](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L13)*

what convertTo will convert to

## Methods

### <a id="convertfrom" name="convertfrom"></a>  convertFrom

▸ **convertFrom**(`value`: number | string): *string*

*Defined in [converter/converter.ts:32](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L32)*

Function to convert from the `to` number base to the `from` number base

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; string | number in base `to` to convert to base `from` |

**Returns:** *string*

number in base `from`

___

### <a id="convertto" name="convertto"></a>  convertTo

▸ **convertTo**(`value`: number | string): *string*

*Defined in [converter/converter.ts:23](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L23)*

Function to convert to the `to` number base from the `from` number base

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; string | number in base `from` to convert to base `to` |

**Returns:** *string*

number in base `to`
