"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return value instanceof Promise;
}
exports.isPromise = isPromise;
function isIter(iter) {
    return iter[Symbol.iterator] !== undefined;
}
exports.isIter = isIter;
function isObject(mist) {
    return typeof mist === 'object';
}
exports.isObject = isObject;
