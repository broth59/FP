"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("../_"));
var is_1 = require("../is");
exports.get = _.curry(function get(key, obj) {
    var _a;
    if (!key || !is_1.isObject(obj))
        return undefined;
    var keys = key.split('.');
    var first = keys.shift();
    return ((_a = keys.reduce(function (acc, key) {
        if (acc instanceof Object)
            return acc[key];
        else
            return acc;
    }, obj[first])) !== null && _a !== void 0 ? _a : undefined);
});
