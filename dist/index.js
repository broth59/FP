"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("./_"));
exports._ = _;
var L = __importStar(require("./L"));
exports.L = L;
var C = __importStar(require("./C"));
exports.C = C;
var log = console.log;
_.go([{ hi: 'string', ho: { toto: "heep" } }], L.where({ hi: 'string' }), L.deepPluck("ho.toto"), _.takeAll, log);
_.go(L.range(1, 10), L.map(_.pipe(function (num) { return new Array(num); }, _.map(function (x) { return "*"; }), _.join(''))), _.join("\n"), log);
