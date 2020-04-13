
# Module: "builtins/binary"

## Index

### Variables

* [charset](_builtins_binary_.md#const-charset)

### Functions

* [convertFrom](_builtins_binary_.md#const-convertfrom)
* [convertTo](_builtins_binary_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"01"* = "01"

*Defined in [builtins/binary.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/binary.ts#L6)*

binary charset

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/binary.ts:21](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/binary.ts#L21)*

Function to convert from binary to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in binary to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number, `precision`: number): *string*

*Defined in [builtins/binary.ts:13](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/binary.ts#L13)*

Function to convert from base10 to binary

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | number | - | number in base10 to convert to binary |
`precision` | number | 10 | number of digits to appear after the decimal point if converting decimals  |

**Returns:** *string*
