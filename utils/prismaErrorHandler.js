"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaErrorHandler = void 0;
const winston_1 = __importDefault(require("winston"));
const customMessages_1 = require("./customMessages");
const customStatusCode_1 = require("./customStatusCode");
const statusHandler_1 = require("./statusHandler");
const prismaErrorHandler = (res, errorCode) => {
    switch (errorCode) {
        case "P2002": {
            winston_1.default.warn(`User entered already registered email`);
            (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.BAD_REQUEST, false, customMessages_1.customMessages.EMAIL_ALREADY_EXIST);
        }
        case "P2011": {
            winston_1.default.warn(`User is missing required fields`);
            (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.BAD_REQUEST, false, customMessages_1.customMessages.BAD_REQUEST);
        }
        default: {
            winston_1.default.warn(`Database is getting invalid value for field`);
            (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.BAD_REQUEST, false, customMessages_1.customMessages.BAD_REQUEST);
        }
    }
};
exports.prismaErrorHandler = prismaErrorHandler;
