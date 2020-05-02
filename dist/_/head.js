"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function head(iter) {
    return iter[Symbol.iterator]().next().value;
}
exports.head = head;
