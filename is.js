"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return value instanceof Promise;
}
exports.isPromise = isPromise;
function isIterable(iter) {
    return iter[Symbol.iterator] !== undefined;
}
exports.isIterable = isIterable;
function isObject(mist) {
    return typeof mist === "object";
}
exports.isObject = isObject;
