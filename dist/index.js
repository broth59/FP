'use strict'
var __values =
    (this && this.__values) ||
    function (o) {
        var s = typeof Symbol === 'function' && Symbol.iterator,
            m = s && o[s],
            i = 0
        if (m) return m.call(o)
        if (o && typeof o.length === 'number')
            return {
                next: function () {
                    if (o && i >= o.length) o = void 0
                    return { value: o && o[i++], done: !o }
                },
            }
        throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    }
var e_1, _a
Object.defineProperty(exports, '__esModule', { value: true })
var _1 = require('./src/_')
var L_1 = require('./src/L')
var log = console.log
var it = L_1.L.map(
    function (val) {
        return val.toLowerCase()
    },
    ['SSS', 'TTT']
)
try {
    for (var it_1 = __values(it), it_1_1 = it_1.next(); !it_1_1.done; it_1_1 = it_1.next()) {
        var b_1 = it_1_1.value
        log(b_1)
    }
} catch (e_1_1) {
    e_1 = { error: e_1_1 }
} finally {
    try {
        if (it_1_1 && !it_1_1.done && (_a = it_1.return)) _a.call(it_1)
    } finally {
        if (e_1) throw e_1.error
    }
}
var b = _1._.go(
    ['d', 'c', 'f'],
    L_1.L.map(function (val) {
        return val
    }),
    _1._.reduce(function (acc, val) {
        return acc + val
    })
)
log(b)
var _2 = require('./src/_')
exports._ = _2._
var L_2 = require('./src/L')
exports.L = L_2.L

import { L } from './L'
