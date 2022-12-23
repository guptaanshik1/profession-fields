"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeFields = void 0;
function excludeFields(obj, fields) {
    for (let field of fields) {
        delete obj[field];
    }
    return obj;
}
exports.excludeFields = excludeFields;
