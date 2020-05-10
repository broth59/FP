"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("."));
exports.count = function (key, obj) {
    if (key)
        obj[key] = ++obj[key] || 1;
    return obj;
};
exports.countby = _.curry(function (fn, iter) {
    if (typeof fn == 'string')
        fn = _.get(fn);
    return _.reduce(function (grouped, val) {
        return exports.count(fn(val), grouped);
    }, {}, iter);
});
