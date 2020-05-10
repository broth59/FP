"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function curryD(fn, arg_length) {
    arg_length || (arg_length = fn.length);
    return function () {
        var bs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bs[_i] = arguments[_i];
        }
        var args = arguments;
        arg_length -= bs.length;
        return arg_length == 0 ? fn.apply(void 0, __spread(bs)) : curryD(function () {
            var bs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                bs[_i] = arguments[_i];
            }
            return fn.apply(void 0, __spread(args, bs));
        }, arg_length);
    };
}
exports.curryD = curryD;
function curry(fn) {
    return function (a) {
        var bs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            bs[_i - 1] = arguments[_i];
        }
        return bs.length ? fn.apply(void 0, __spread([a], bs)) : function () {
            var bs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                bs[_i] = arguments[_i];
            }
            return fn.apply(void 0, __spread([a], bs));
        };
    };
}
exports.curry = curry;
function curryr(fn) {
    return function (arg2, arg1) {
        return arg1 ? fn(arg1, arg2) : function (arg1) { return fn(arg1, arg2); };
    };
}
exports.curryr = curryr;
