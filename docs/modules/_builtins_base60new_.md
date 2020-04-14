
# Module: "builtins/base60new"

## Index

### Variables

* [charset](_builtins_base60new_.md#const-charset)

### Functions

* [convertFrom](_builtins_base60new_.md#const-convertfrom)
* [convertTo](_builtins_base60new_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz"* = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz"

*Defined in [builtins/base60new.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base60new.ts#L6)*

base60new charset 0-9 A-H J-N P-Z _ a-k m-z

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base60new.ts:20](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base60new.ts#L20)*

Function to convert from base60new to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base60new to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number): *string*

*Defined in [builtins/base60new.ts:12](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base60new.ts#L12)*

Function to convert from base10 to base60new

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | number in base10 to convert to base60new  |

**Returns:** *string*
