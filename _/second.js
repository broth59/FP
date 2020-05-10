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
function second(iter) {
    var iterable = L.each(iter);
    iterable.next();
    return iterable.next().value[1];
}
exports.second = second;
