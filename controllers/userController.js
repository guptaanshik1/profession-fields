"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const client_1 = require("@prisma/client");
const winston_1 = __importDefault(require("winston"));
const customMessages_1 = require("../utils/customMessages");
const customStatusCode_1 = require("../utils/customStatusCode");
const statusHandler_1 = require("../utils/statusHandler");
const excludeFields_1 = require("../utils/excludeFields");
const prismaErrorHandler_1 = require("../utils/prismaErrorHandler");
const prisma = new client_1.PrismaClient();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    winston_1.default.info(`Creating a user with data :: ${JSON.stringify(payload)} `);
    if (payload["name"] == "" ||
        payload["email"] == "" ||
        payload["password"] == null ||
        payload["personalAddress"] == "" ||
        payload["city"] == "" ||
        !payload["pincode"]) {
        winston_1.default.info("User has sent a bad payload");
        (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.BAD_REQUEST, false, customMessages_1.customMessages.BAD_REQUEST);
    }
    let newUser;
    try {
        newUser = yield prisma.user.create({
            data: payload,
        });
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            (0, prismaErrorHandler_1.prismaErrorHandler)(res, error.code);
        }
    }
    if (!newUser) {
        winston_1.default.error("Problem in saving the user");
        (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.INTERNAL_SERVER_ERROR, false, customMessages_1.customMessages.INTERNAL_SERVER_ERROR);
    }
    winston_1.default.info(`User has been saved with data :: ${JSON.stringify(newUser)} `);
    // @ts-ignore
    const userToBeReturned = (0, excludeFields_1.excludeFields)(newUser, ["password"]);
    (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.SUCCESS, true, customMessages_1.customMessages.USER_CREATED, userToBeReturned);
});
exports.createUser = createUser;
