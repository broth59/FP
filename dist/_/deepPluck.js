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
var L = __importStar(require("../L"));
function deepPluck(keys, iter) {
    return _.pipe(L.deepPluck(keys), _.takeAll)(iter);
}
exports.deepPluck = deepPluck;