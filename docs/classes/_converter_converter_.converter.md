
# Class: Converter

Converter class to convert between to different number bases

## Hierarchy

* **Converter**

## Index

### Constructors

* [constructor](_converter_converter_.converter.md#constructor)

### Properties

* [from](_converter_converter_.converter.md#private-from)
* [to](_converter_converter_.converter.md#private-to)

### Methods

* [convertFrom](_converter_converter_.converter.md#convertfrom)
* [convertTo](_converter_converter_.converter.md#convertto)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new Converter**(`to`: string, `from`: string): *[Converter](_converter_converter_.converter.md)*

*Defined in [converter/converter.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L6)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | string | what convertTo will convert to |
`from` | string | what convertFrom will convert to  |

**Returns:** *[Converter](_converter_converter_.converter.md)*

## Properties

### <a id="private-from" name="private-from"></a> `Private` from

• **from**: *string*

*Defined in [converter/converter.ts:13](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L13)*

what convertFrom will convert to

___

### <a id="private-to" name="private-to"></a> `Private` to

• **to**: *string*

*Defined in [converter/converter.ts:12](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L12)*

what convertTo will convert to

## Methods

### <a id="convertfrom" name="convertfrom"></a>  convertFrom

▸ **convertFrom**(`value`: number | string): *string*

*Defined in [converter/converter.ts:30](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L30)*

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

*Defined in [converter/converter.ts:21](https://github.com/nvitaterna/bconvert/blob/master/src/converter/converter.ts#L21)*

Function to convert to the `to` number base from the `from` number base

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; string | number in base `from` to convert to base `to` |

**Returns:** *string*

number in base `to`
