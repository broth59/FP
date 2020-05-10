"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("."));
var L = __importStar(require("../L"));
var symbol_1 = require("../symbol");
exports.findIndex = _.curry(function (predi, iter) {
    var count = -1;
    iter = L.each(iter);
    iter.return = null;
    return (function recurr() {
        var e_1, _a;
        var _loop_1 = function (key, val) {
            count++;
            if (val instanceof Promise)
                return { value: val
                        .then(function (val) {
                        if ([symbol_1.nop, symbol_1.noop].includes(val))
                            return recurr();
                        else
                            return predi(val, key) ? count : recurr();
                    })
                        .catch(function (e) { return ([symbol_1.nop, symbol_1.noop].includes(e) ? recurr() : Promise.reject(e)); }) };
            else if (predi(val, key))
                return { value: count };
        };
        try {
            for (var iter_1 = __values(iter), iter_1_1 = iter_1.next(); !iter_1_1.done; iter_1_1 = iter_1.next()) {
                var _b = __read(iter_1_1.value, 2), key = _b[0], val = _b[1];
                var state_1 = _loop_1(key, val);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iter_1_1 && !iter_1_1.done && (_a = iter_1.return)) _a.call(iter_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return -1;
    })();
});
