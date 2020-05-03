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
exports.push = function (key, obj, val) {
    key !== null && key !== void 0 ? key : (obj[key] = obj[key] || []).push(val);
    return obj;
};
exports.groupby = _.curry(function (fn, iter) {
    if (typeof fn == 'string')
        fn = _.get(fn);
    return _.reduce(function (grouped, val) {
        return exports.push(fn(val), grouped, val);
    }, {}, iter);
});
