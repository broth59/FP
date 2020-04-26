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
var _1 = require("./_");
var log = console.log;
function isIter(iter) {
    return iter[Symbol.iterator] !== undefined;
}
function isObject(iter) {
    return typeof iter === "object" ? true : false;
}
var L;
(function (L) {
    var e_1, _a;
    L.each = function (iter) {
        return isIter(iter) ?
            (function () {
                var index, iter_1, iter_1_1, val, e_2_1;
                var e_2, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            index = 0;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 6, 7, 8]);
                            iter_1 = __values(iter), iter_1_1 = iter_1.next();
                            _b.label = 2;
                        case 2:
                            if (!!iter_1_1.done) return [3, 5];
                            val = iter_1_1.value;
                            return [4, [index++, val]];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4:
                            iter_1_1 = iter_1.next();
                            return [3, 2];
                        case 5: return [3, 8];
                        case 6:
                            e_2_1 = _b.sent();
                            e_2 = { error: e_2_1 };
                            return [3, 8];
                        case 7:
                            try {
                                if (iter_1_1 && !iter_1_1.done && (_a = iter_1.return)) _a.call(iter_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                            return [7];
                        case 8: return [2];
                    }
                });
            })()
            : (function () {
                var e_3, _a;
                var keys = _1._.keys(iter);
                var res = [];
                try {
                    for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                        var key = keys_1_1.value;
                        res.push([key, iter[key]]);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return res;
            })();
    };
    try {
        for (var _b = __values(L.each({ hi: "string" })), _c = _b.next(); !_c.done; _c = _b.next()) {
            var b = _c.value;
            log(b);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
})(L = exports.L || (exports.L = {}));
