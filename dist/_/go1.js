"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../is");
function go1(a, fn) {
    return is_1.isPromise(a) ? a.then(fn) : fn(a);
}
exports.go1 = go1;
