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
exports.max = _.curry(function (predicate, iter) {
    !predicate && (predicate = function (acc, val) { return acc > val; });
    return _.reduce(function (acc, val) {
        return predicate(acc, val) ? acc : val;
    }, iter);
});
