
# Class: Converter

Converter class to convert between to different number bases

## Hierarchy

* **Converter**

## Index

### Constructors

* [constructor](_converter_converter_.converter.md#constructor)

### Methods

* [convertFrom](_converter_converter_.converter.md#convertfrom)
* [convertTo](_converter_converter_.converter.md#convertto)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new Converter**(`to`: string, `from`: string, `precision`: number): *[Converter](_converter_converter_.converter.md)*

Defined in converter/converter.ts:6

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`to` | string | - | what convertTo will convert to |
`from` | string | - | what convertFrom will convert to |
`precision` | number | 10 | number of digits to appear after the decimal point if converting decimals  |

**Returns:** *[Converter](_converter_converter_.converter.md)*

## Methods

### <a id="convertfrom" name="convertfrom"></a>  convertFrom

▸ **convertFrom**(`value`: number | string): *string*

Defined in converter/converter.ts:32

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

Defined in converter/converter.ts:23

Function to convert to the `to` number base from the `from` number base

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; string | number in base `from` to convert to base `to` |

**Returns:** *string*

number in base `to`
