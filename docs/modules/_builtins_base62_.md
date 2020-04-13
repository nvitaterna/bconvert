
# Module: "builtins/base62"

## Index

### Variables

* [charset](_builtins_base62_.md#const-charset)

### Functions

* [convertFrom](_builtins_base62_.md#const-convertfrom)
* [convertTo](_builtins_base62_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"* = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

*Defined in [builtins/base62.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base62.ts#L6)*

base62 charset 0-9 A-Z a-z

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base62.ts:21](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base62.ts#L21)*

Function to convert from base62 to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base62 to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number, `precision`: number): *string*

*Defined in [builtins/base62.ts:13](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base62.ts#L13)*

Function to convert from base10 to base62

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | number | - | number in base10 to convert to base62 |
`precision` | number | 10 | number of digits to appear after the decimal point if converting decimals  |

**Returns:** *string*
