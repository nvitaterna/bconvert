
# Module: "builtins/base57"

## Index

### Variables

* [charset](_builtins_base57_.md#const-charset)

### Functions

* [convertFrom](_builtins_base57_.md#const-convertfrom)
* [convertTo](_builtins_base57_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"* = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"

*Defined in [builtins/base57.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base57.ts#L6)*

base57 charset 2-9 A-H J-N P-Z a-k m-z

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base57.ts:20](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base57.ts#L20)*

Function to convert from base57 to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base57 to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number): *string*

*Defined in [builtins/base57.ts:12](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base57.ts#L12)*

Function to convert from base10 to base57

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | number in base10 to convert to base57  |

**Returns:** *string*
