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
var symbol_1 = require("../symbol");
function toIter(iter) {
    return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : [][Symbol.iterator]();
}
function isString(literal) {
    return literal && !!literal.toLowerCase;
}
function flat(iter, depth) {
    var _a;
    if (depth === void 0) { depth = 1; }
    var iterStack = [toIter(iter)];
    return _a = {
            next: function recurr() {
                var iter = _.last(iterStack);
                if (!iter)
                    return { done: true };
                var cur = iter.next();
                if (cur.done) {
                    iterStack.pop();
                    return recurr();
                }
                else if (iterStack.length <= depth && cur.value[Symbol.iterator] && !isString(cur.value)) {
                    iterStack.push(cur.value[Symbol.iterator]());
                    return recurr();
                }
                else if (cur.value instanceof Promise) {
                    return {
                        value: cur.value.then(function (val) {
                            if ((iterStack.length > depth && !val[Symbol.iterator]) || isString(val))
                                return val;
                            var iter = val[Symbol.iterator](), cur = iter.next();
                            return cur.done ? Promise.reject(symbol_1.nop) : (iterStack.push(iter), cur.value);
                        }),
                        done: false,
                    };
                }
                else {
                    return cur;
                }
            }
        },
        _a[Symbol.iterator] = function () {
            return this;
        },
        _a;
}
exports.flat = flat;
