"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusHandler = void 0;
const statusHandler = (res, status, success, message, data) => {
    return res.status(status).json({
        success,
        message,
        data,
    });
};
exports.statusHandler = statusHandler;
