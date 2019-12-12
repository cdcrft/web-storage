import extend from 'extend';

export default class Storage
{
    constructor(config) {
        this.config = {
            'storage-keys': {},
            'type': 'local'
        };
        extend(this.config, config !== undefined ? config : {});
        this.storage = null;

        if (typeof window[`${this.config.type}Storage`] !== 'undefined') {
            this.storage = window[`${this.config.type}Storage`];
        } else {
            throw new Error('Can\'t find the storage type you required');
        }
    }

    keys() {
        return this.config['storage-keys'];
    }

    _storage(action, key = null, value = null, setNull = false) {
        if (typeof this.storage == 'undefined') {
            throw new Error('No storage was configured');
        }

        if (value === null && key === null) {
            return this.storage[action]();
        }

        if (value === null && setNull === false) {
            return this.storage[action](key);
        }

        return this.storage[action](key, value);
    }

    store(key, value) {
        key = this._defaultKeyConfig(key);

        if (key.keep === false) {
            value = key.stringify(value);
        }

        return this._storage('setItem', key.name, value, true);
    }

    get(key) {
        key = this._defaultKeyConfig(key);

        let result = this._storage('getItem', key.name);

        if (result === null) {
            return key.default;
        }

        if (key.keep === true) {
            return result;
        }

        return key.parse(result);
    }

    remove(key) {
        key = this._defaultKeyConfig(key);
        return this._storage('removeItem', key.name);
    }

    clearAll() {
        return this._storage('clear');
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