
# Module: "builtins/base32hex"

## Index

### Variables

* [charset](_builtins_base32hex_.md#const-charset)

### Functions

* [convertFrom](_builtins_base32hex_.md#const-convertfrom)
* [convertTo](_builtins_base32hex_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"0123456789ABCDEFGHIJKLMNOPQRSTUV"* = "0123456789ABCDEFGHIJKLMNOPQRSTUV"

*Defined in [builtins/base32hex.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base32hex.ts#L6)*

base32hex charset 0-9 A-V

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base32hex.ts:21](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base32hex.ts#L21)*

Function to convert from base32hex to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base32hex to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number, `precision`: number): *string*

*Defined in [builtins/base32hex.ts:13](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base32hex.ts#L13)*

Function to convert from base10 to base32hex

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | number | - | number in base10 to convert to base32hex |
`precision` | number | 10 | number of digits to appear after the decimal point if converting decimals  |

**Returns:** *string*
