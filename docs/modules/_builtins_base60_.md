
# Module: "builtins/base60"

## Index

### Variables

* [charset](_builtins_base60_.md#const-charset)

### Functions

* [convertFrom](_builtins_base60_.md#const-convertfrom)
* [convertTo](_builtins_base60_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx"* = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx"

*Defined in [builtins/base60.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base60.ts#L6)*

base60 charset 0-9 A-Z a-x

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base60.ts:21](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base60.ts#L21)*

Function to convert from base60 to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base60 to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number, `precision`: number): *string*

*Defined in [builtins/base60.ts:13](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base60.ts#L13)*

Function to convert from base10 to base60

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | number | - | number in base10 to convert to base60 |
`precision` | number | 10 | number of digits to appear after the decimal point if converting decimals  |

**Returns:** *string*
