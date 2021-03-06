
# Module: "builtins/base64url"

## Index

### Variables

* [charset](_builtins_base64url_.md#const-charset)

### Functions

* [convertFrom](_builtins_base64url_.md#const-convertfrom)
* [convertTo](_builtins_base64url_.md#const-convertto)

## Variables

### <a id="const-charset" name="const-charset"></a> `Const` charset

• **charset**: *"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"* = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"

*Defined in [builtins/base64url.ts:9](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base64url.ts#L9)*

base64url charset

## Functions

### <a id="const-convertfrom" name="const-convertfrom"></a> `Const` convertFrom

▸ **convertFrom**(`value`: string): *number*

*Defined in [builtins/base64url.ts:26](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base64url.ts#L26)*

Function to convert from base64url to base10

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string in base64url to convert to base10  |

**Returns:** *number*

___

### <a id="const-convertto" name="const-convertto"></a> `Const` convertTo

▸ **convertTo**(`value`: number): *string*

*Defined in [builtins/base64url.ts:15](https://github.com/nvitaterna/bconvert/blob/master/src/builtins/base64url.ts#L15)*

Function to convert from base10 to base64url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | number in base10 to convert to base64url  |

**Returns:** *string*
