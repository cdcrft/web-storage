!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cdcrftWebStorage=t():e.cdcrftWebStorage=t()}(this,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Object.prototype.toString,u=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},i=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var t,r=o.call(e,"constructor"),u=e.constructor&&e.constructor.prototype&&o.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!r&&!u)return!1;for(t in e);return void 0===t||o.call(e,t)},c=function(e,t){u&&"__proto__"===t.name?u(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},f=function(e,t){if("__proto__"===t){if(!o.call(e,t))return;if(a)return a(e,t).value}return e[t]};e.exports=function e(){var t,r,o,n,u,a,s=arguments[0],p=1,d=arguments.length,y=!1;for("boolean"==typeof s&&(y=s,s=arguments[1]||{},p=2),(null==s||"object"!=typeof s&&"function"!=typeof s)&&(s={});p<d;++p)if(null!=(t=arguments[p]))for(r in t)o=f(s,r),s!==(n=f(t,r))&&(y&&n&&(i(n)||(u=l(n)))?(u?(u=!1,a=o&&l(o)?o:[]):a=o&&i(o)?o:{},c(s,{name:r,newValue:e(y,a,n)})):void 0!==n&&c(s,{name:r,newValue:n}));return s}},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o);class u{constructor(e){this.config={"storage-keys":{}},n()(this.config,void 0!==e?e:{})}keys(){return this.config["storage-keys"]}_localStorage(e,t=null,r=null,o=!1){if(void 0!==window.localStorage)return null===r&&null===t?window.localStorage[e]():null===r&&!1===o?window.localStorage[e](t):window.localStorage[e](t,r)}store(e,t){return!1===(e=this._defaultKeyConfig(e)).keep&&(t=e.stringify(t)),this._localStorage("setItem",e.name,t,!0)}get(e){e=this._defaultKeyConfig(e);let t=this._localStorage("getItem",e.name);return null===t?e.default:!0===e.keep?t:e.parse(t)}remove(e){return this._localStorage("removeItem",e.name)}clearAll(){return this._localStorage("clear")}_defaultKeyConfig(e){let t=e;"string"==typeof e&&(t=e,e=e in this.keys()?this.keys()[e]:void 0),null==e&&(e={name:t});let r={default:"",parse:JSON.parse,stringify:JSON.stringify,keep:!1};if(n()(r,e),void 0===(e=r).name)throw Error("You need to define the name of the storage key");return r}}function a(e){switch(e){case"true":return!0;case"false":return!1;default:throw new Error("Cannot parse value "+e+" to boolean")}}function l(e){switch(e){case!0:return"true";case!1:return"false";default:throw new Error(e+" is not a boolean")}}r.d(t,"parseBoolean",(function(){return a})),r.d(t,"stringifyBoolean",(function(){return l})),r.d(t,"Storage",(function(){return u}));t.default=u}])}));