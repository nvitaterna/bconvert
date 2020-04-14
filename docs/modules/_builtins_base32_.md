
# Module: "builtins/base32"

## Index

### Variables

* [charset](_builtins_base32_.md#const-charset)

### Functions

* [convertFrom](_builtins_base32_.md#const-convertfrom)
* [convertTo](_builtins_base32_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"* = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"

*Defined in [builtins/base32.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base32.ts#L6)*

base32 charset A-Z 2-7

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base32.ts:20](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base32.ts#L20)*

Function to convert from base32 to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base32 to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number): *string*

*Defined in [builtins/base32.ts:12](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base32.ts#L12)*

Function to convert from base10 to base32

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | number in base10 to convert to base32  |

**Returns:** *string*
