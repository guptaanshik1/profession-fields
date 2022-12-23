"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(statusCode, message, data) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        this.statusCode = statusCode;
        this.data = data;
    }
}
exports.ErrorHandler = ErrorHandler;
