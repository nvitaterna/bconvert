
# Module: "builtins/base64"

## Index

### Variables

* [charset](_builtins_base64_.md#const-charset)

### Functions

* [convertFrom](_builtins_base64_.md#const-convertfrom)
* [convertTo](_builtins_base64_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"* = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

*Defined in [builtins/base64.ts:6](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base64.ts#L6)*

base64 charset

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base64.ts:20](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base64.ts#L20)*

Function to convert from base64 to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base64 to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number): *string*

*Defined in [builtins/base64.ts:12](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base64.ts#L12)*

Function to convert from base10 to base64

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | number in base10 to convert to base64  |

**Returns:** *string*
