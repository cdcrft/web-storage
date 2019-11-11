# Codecraft Simple Web Storage

This small library aims at facilitating the storage of every kind of value using the web local storage API.

## Install

If you use webpack you can install the library using npm :

```
npm install cdcrft-web-storage
```

or download source code from repo and include it inside your html page directly :

```html
<script type="text/javascript" src="js-folder/cdcrft-web-storage/dist/index.js"></script>

<script type="text/javascript" >
    // Access the module :
    let storage = new cdcrftWebStorage.Storage();
</script>
```

## Basic usage

First in order to use this library you need to configure the storage keys :

```Javascript
let config = {
    'storage-keys': {
        SOME_ARRAY_OF_OBJECTS: {
            name: 'some.array.of.objects',
            default: [],
            parse: customParseFunction
            stringify: customStringifyFunction
        },
        TOKEN_STRING: {
            name: 'token.string',
            default: null,
            keep: true
        }
    }
}
```

Here is an explanation of this config file :

It must be an array containing the 'storage-keys' key. This key should contain another array representing all of the values you wish to save :

### name
This option is a string representing the name under which your value will be saved inside the local storage

### default
Default value that should be returned by the storage if none was stored

### stringify
Function that will be used to transform your value into a string that can be saved in local storage

Defaults to JSON.stringify

### parse
Function that will be used to reverse transform the saved value into your original value

Defaults to JSON.parse

### keep
Set this to true if you wish that no parse or stringify value be applied to your original value when saved (use this if your original value is a string)

Then you need to create your storage object with the config you just created :

```Javascript
let storage = new Storage(config);
```

### Save value :

```Javascript
let keys = storage.keys();
// You can use it directly with saved config
storage.store(keys.SOMME_ARRAY_OF_OBJECTS, arrayOfObjects)
// But also with a simple string
storage.store('SOME_ARRAY_OF_OBJECTS', arrayOfObjects);
```

### Get value :
```Javascript
let keys = storage.keys();
let value = storage.get(keys.SOMME_ARRAY_OF_OBJECTS)
let value = storage.get('SOMME_ARRAY_OF_OBJECTS');
```

### Remove value

```Javascript
let keys = storage.keys();
storage.clear(keys.SOME_ARRAY_OF_OBJECTS);
storage.clear('SOME_ARRAY_OF_OBJECTS');
```

### Remove all values
```Javascript
storage.clearAll();
```

Last but not least, you can also save values that you did not configure :
```Javascript
storage.store('UNCONFIGURED_VALUE', {foo: 'bar'});
```

If you use above solution, with just a string, default configuration will be used for the value :
Configuration will be as if you did this :
```Javascript
let config = {
    'storage-keys': {
        UNCONFIGURED_VALUE:
        {
            name: 'UNCONFIGURED_VALUE',
            default: '',
            parse: JSON.parse,
            stringify: JSON.stringify,
            keep: false
        }
    }
}
```

If you need to save a value that was not configured but you need a specific configuration, you also can do it :

```Javascript
let config = {
    'storage-keys': {
        WHATEVER: {
            name: 'whatever.the.name',
            default: '{"foo": "bar"}',
            parse: customParseFunction,
            stringify: customStringifyFunction,
            keep: false
        }
    }
}

storage.store(config, myValue);
```

With this solution, you will never be able to call it using the keys().WHATEVER_THE_NAME solution.

## WARNING :

For storing boolean values, please use provided utils for configuration. Otherwise you expose yourself to some troubles.

```Javascript
import {parseBoolean, stringifyBoolean} from 'cdcrft-web-storage';

let config = {
    'storage-keys': {
        BOOLEAN: {
            name: 'demo.boolean',
            default: true,
            parse: parseBoolean,
            stringify: stringifyBoolean,
        }
    }
}
```

