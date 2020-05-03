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
exports.some = _.curry(function (predi, iter) {
    var value = _.find(predi, iter);
    return is_1.isPromise(value) ? value.then(function (val) { return !!val; }) : !!value;
});
