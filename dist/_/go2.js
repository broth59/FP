"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbol_1 = require("../symbol");
function go2(acc, a, fn) {
    return a instanceof Promise
        ? a.then(function (a) {
            if (acc instanceof Symbol) {
                if (acc == symbol_1.noop && a == symbol_1.nop)
                    return symbol_1.noop;
                if (acc == symbol_1.noop)
                    return a;
                if (a == symbol_1.noop)
                    return acc;
            }
            return fn(acc, a);
        }, function (e) { return (e == symbol_1.nop ? acc : Promise.reject(e)); })
        : fn(acc, a);
}
exports.go2 = go2;
