"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbol_1 = require("../symbol");
function go2(acc, a, fn) {
    return a instanceof Promise
        ? a.then(function (a) {
            if ([symbol_1.noop, symbol_1.nop].includes(acc) && [symbol_1.noop, symbol_1.nop].includes(a))
                return symbol_1.noop;
            if ([symbol_1.noop, symbol_1.nop].includes(acc))
                return a;
            if ([symbol_1.noop, symbol_1.nop].includes(a))
                return acc;
            return fn(acc, a);
        }, function (e) { return (e == symbol_1.nop ? acc : Promise.reject(e)); })
        : fn(acc, a);
}
exports.go2 = go2;
