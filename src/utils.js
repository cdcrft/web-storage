/**
 * Utility to store boolean value in local storage
 * Use it in combination with stringifyBoolean function in this file.
 * 
 * @param {string} string 
 */
export function parseBoolean(string) {
    switch (string) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            throw new Error('Cannot parse value ' + string + ' to boolean');
    }
}

/**
 * Utility to store boolean value in local storage
 * Use it in combination with parseBoolean function in this file.
 * 
 * @param {boolean} boolean 
 */
export function stringifyBoolean(boolean) {
    switch (boolean) {
        case true:
            return 'true';
        case false:
            return 'false';
        default:
            throw new Error(boolean + ' is not a boolean');
    }
}
