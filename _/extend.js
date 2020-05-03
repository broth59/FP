"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extend(target, src) {
    target = JSON.parse(JSON.stringify(target));
    return src
        ? Object.assign(target, src)
        : function (src) {
            src = JSON.parse(JSON.stringify(src));
            return Object.assign(target, src);
        };
}
exports.extend = extend;
