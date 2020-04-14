
# Module: "builtins/octal"

## Index

### Variables

* [charset](_builtins_octal_.md#const-charset)

### Functions

* [convertFrom](_builtins_octal_.md#const-convertfrom)
* [convertTo](_builtins_octal_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"01234567"* = "01234567"

*Defined in [builtins/octal.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/octal.ts#L6)*

octal charset

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/octal.ts:20](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/octal.ts#L20)*

Function to convert from octal to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in octal to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number): *string*

*Defined in [builtins/octal.ts:12](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/octal.ts#L12)*

Function to convert from base10 to octal

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | number in base10 to convert to octal  |

**Returns:** *string*
