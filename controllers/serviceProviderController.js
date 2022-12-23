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
exports.getFieldsForProfession = exports.takeProfession = void 0;
const client_1 = require("@prisma/client");
const winston_1 = __importDefault(require("winston"));
const customMessages_1 = require("../utils/customMessages");
const statusHandler_1 = require("../utils/statusHandler");
const prisma = new client_1.PrismaClient();
let globalProfession;
const takeProfession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(req === null || req === void 0 ? void 0 : req.body))
        (0, statusHandler_1.statusHandler)(res, 400, false, customMessages_1.customMessages.BAD_REQUEST);
    const { profession } = req === null || req === void 0 ? void 0 : req.body;
    const professions = [
        "DOCTOR",
        "BARBER",
        "LOCAL_MARTS",
        "DENTIST",
        "LAND_LORD",
        "GENERIC",
        "asaadsd",
    ];
    winston_1.default.info(`Gettng profession: ${profession}`);
    if (professions && !professions.includes(profession)) {
        winston_1.default.warn(`Invalid profession ${profession} in the payload`);
        (0, statusHandler_1.statusHandler)(res, 400, false, customMessages_1.customMessages.BAD_REQUEST);
    }
    globalProfession = profession;
    (0, statusHandler_1.statusHandler)(res, 200, true, customMessages_1.customMessages.SUCCESS);
});
exports.takeProfession = takeProfession;
const getFieldsForProfession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Global profession: ", globalProfession);
});
exports.getFieldsForProfession = getFieldsForProfession;
