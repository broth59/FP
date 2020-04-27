"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var L_1 = require("./L");
var symbol_1 = require("./symbol");
var rxjs_1 = require("rxjs");
var b = rxjs_1.pipe(function (x) { return x + "sdf"; }, function (x) { return x.toLowerCase(); });
b("source");
var log = console.log;
var _;
(function (_) {
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
    _.curryD = curryD;
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
    _.curry = curry;
    function curryr(fn) {
        return function (arg2, arg1) {
            return arg2 ? fn(arg1, arg2) : function (arg1) { return fn(arg1, arg2); };
        };
    }
    _.curryr = curryr;
    function head(iter) {
        return iter[Symbol.iterator]().next().value;
    }
    _.head = head;
    function keys(obj) {
        var e_1, _a;
        var keys = [];
        try {
            for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                keys.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return keys;
    }
    _.keys = keys;
    _.get = _.curry(function get(key, obj) {
        var keys = key.split('.');
        var first = keys.shift();
        return keys.reduce(function (acc, key) {
            if (acc instanceof Object)
                return acc[key];
            else
                return acc;
        }, obj[first]);
    });
    function extend(target, src) {
        target = JSON.parse(JSON.stringify(target));
        return src ? Object.assign(target, src) : function (src) {
            src = JSON.parse(JSON.stringify(src));
            return Object.assign(target, src);
        };
    }
    _.extend = extend;
    _.negate = function (fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return !fn.apply(void 0, __spread(args));
        };
    };
    function isPromise(value) {
        {
            return value instanceof Promise ? true : false;
        }
    }
    function go1(a, fn) {
        return isPromise(a) ? a.then(fn) : fn(a);
    }
    _.go1 = go1;
    function go2(acc, a, fn) {
        return a instanceof Promise ?
            a.then(function (a) {
                if (acc instanceof Symbol) {
                    if (acc == symbol_1.noop && a == symbol_1.nop)
                        return symbol_1.noop;
                    if (acc == symbol_1.noop)
                        return a;
                    if (a == symbol_1.noop)
                        return acc;
                }
                return fn(acc, a);
            }, function (e) { return e == symbol_1.nop ? acc : Promise.reject(e); }) : fn(acc, a);
    }
    _.go2 = go2;
    _.catchNoop = function (iter) {
        var _a, _b, _c, key, val, e_2_1;
        var e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 7, 8, 9]);
                    _a = __values(L_1.L.each(iter)), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3, 6];
                    _c = __read(_b.value, 2), key = _c[0], val = _c[1];
                    if (!(val instanceof Promise)) return [3, 3];
                    return [4, val.catch(function (e) { return e == symbol_1.nop ? symbol_1.noop : Promise.reject(e); })];
                case 2:
                    _e.sent();
                    return [3, 5];
                case 3: return [4, val];
                case 4:
                    _e.sent();
                    _e.label = 5;
                case 5:
                    _b = _a.next();
                    return [3, 1];
                case 6: return [3, 9];
                case 7:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 9: return [2];
            }
        });
    };
    function reduceT(fn, acc, iter) {
        if (!iter) {
            return reduceT(fn, _.head(iter = _.catchNoop(acc)[Symbol.iterator]()), iter);
        }
        iter.return = null;
        return _.go1(acc, function recurr(acc) {
            var e_3, _a;
            try {
                for (var _b = __values(L_1.L.each(iter)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), key = _d[0], val = _d[1];
                    acc = _.go2(acc, val, fn);
                    if (acc instanceof Promise)
                        return acc.then(recurr);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return acc;
        });
    }
    var reduce = _.curryD(reduceT);
    var b = reduce(function (a, b) { return a + b; }, [1, 2, 3]);
    log(b);
})(_ = exports._ || (exports._ = {}));
