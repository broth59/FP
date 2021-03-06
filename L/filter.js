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
var L = __importStar(require("../L"));
var _ = __importStar(require("../_"));
var symbol_1 = require("../symbol");
exports.filter = _.curry(function (predicate, iter) {
    var _loop_1, _a, _b, _c, key, val, e_1_1;
    var e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _loop_1 = function (key, val) {
                    var judge;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                judge = _.go1(val, predicate);
                                if (!(judge instanceof Promise)) return [3, 2];
                                return [4, judge.then(function (c) { return (c ? val : Promise.reject(symbol_1.nop)); })];
                            case 1:
                                _a.sent();
                                return [3, 4];
                            case 2:
                                if (!predicate(val)) return [3, 4];
                                return [4, val];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2];
                        }
                    });
                };
                _e.label = 1;
            case 1:
                _e.trys.push([1, 6, 7, 8]);
                _a = __values(L.each(iter)), _b = _a.next();
                _e.label = 2;
            case 2:
                if (!!_b.done) return [3, 5];
                _c = __read(_b.value, 2), key = _c[0], val = _c[1];
                return [5, _loop_1(key, val)];
            case 3:
                _e.sent();
                _e.label = 4;
            case 4:
                _b = _a.next();
                return [3, 2];
            case 5: return [3, 8];
            case 6:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3, 8];
            case 7:
                try {
                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7];
            case 8: return [2];
        }
    });
});
