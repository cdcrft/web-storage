import extend from 'extend';

export default class Storage
{
    constructor(config) {
        this.config = {
            'storage-keys': {}
        };
        extend(this.config, config !== undefined ? config : {});
    }

    keys() {
        return this.config['storage-keys'];
    }

    _localStorage(action, key = null, value = null, setNull = false) {
        if (typeof window.localStorage == 'undefined') {
            return;
        }

        if (value === null && key === null) {
            return window.localStorage[action]();
        }

        if (value === null && setNull === false) {
            return window.localStorage[action](key);
        }

        return window.localStorage[action](key, value);
    }

    store(key, value) {
        key = this._defaultKeyConfig(key);

        if (key.keep === false) {
            value = key.stringify(value);
        }

        return this._localStorage('setItem', key.name, value, true);
    }

    get(key) {
        key = this._defaultKeyConfig(key);

        let result = this._localStorage('getItem', key.name);

        if (result === null) {
            return key.default;
        }

        if (key.keep === true) {
            return result;
        }

        return key.parse(result);
    }

    remove(key) {
        return this._localStorage('removeItem', key.name);
    }

    clearAll() {
        return this._localStorage('clear');
    }

    _defaultKeyConfig(key) {
        let keyString = key;
        if (typeof key === 'string') {
            keyString = key;
            key = key in this.keys() ? this.keys()[key] : undefined;
        }

        if (key == undefined) {
            // If nothing was configured for this key, default values will be used
            key = {
                name: keyString
            };
        }

        let defaultConfig = {
            default: '',
            parse: JSON.parse,
            stringify: JSON.stringify,
            keep: false
        }

        extend(defaultConfig, key);
        key = defaultConfig;

        if (typeof key.name == 'undefined') {
            throw Error('You need to define the name of the storage key');
        }

        return defaultConfig;
    }
}