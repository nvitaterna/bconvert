
# Module: "builtins/hexadecimal"

## Index

### Variables

* [charset](_builtins_hexadecimal_.md#const-charset)

### Functions

* [convertFrom](_builtins_hexadecimal_.md#const-convertfrom)
* [convertTo](_builtins_hexadecimal_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"0123456789ABCDEF"* = "0123456789ABCDEF"

*Defined in [builtins/hexadecimal.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/hexadecimal.ts#L6)*

hexadecimal charset

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/hexadecimal.ts:20](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/hexadecimal.ts#L20)*

Function to convert from hexadecimal to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in hexadecimal to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number): *string*

*Defined in [builtins/hexadecimal.ts:12](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/hexadecimal.ts#L12)*

Function to convert from base10 to hexadecimal

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | number in base10 to convert to hexadecimal  |

**Returns:** *string*
