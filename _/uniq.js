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
exports.uniq = _.curry(function (fn, iter) {
    if (typeof fn == 'string')
        fn = _.get(fn);
    return _.reduce(function (distinct, val) {
        if (!_.find(function (x) { return fn(x) == fn(val); }, distinct))
            distinct.push(val);
        return distinct;
    }, [], iter);
});
