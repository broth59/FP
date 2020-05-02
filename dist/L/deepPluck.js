"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var L = __importStar(require("../L"));
var _ = __importStar(require("../_"));
exports.deepPluck = _.curry(function (key, iter) {
    var gets = _.reduce(function (keys, key) {
        keys.push(_.get(key));
        return keys;
    }, new Array(), key.split('.'));
    return _.go(L.map(function (val) {
        return _.reduce(function (plucked, get) {
            if (plucked && plucked[Symbol.iterator] && typeof plucked != "string") {
                return _.go(_.map(function (item) { return get(item); }, plucked), _.flat);
            }
            else {
                return get(plucked);
            }
        }, val, gets);
    })(iter), L.flat);
});
