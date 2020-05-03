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
exports.indexby = _.curry(function (index, iter) {
    return _.reduce(function (indexed, val) {
        var id = _.get(index, val);
        if (id && !_.get(id, indexed))
            indexed[id] = val;
        return indexed;
    }, {}, iter);
});
