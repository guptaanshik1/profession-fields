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
exports.addCustomFieldForProfession = void 0;
const client_1 = require("@prisma/client");
const customStatusCode_1 = require("./../utils/customStatusCode");
const statusHandler_1 = require("../utils/statusHandler");
const customMessages_1 = require("../utils/customMessages");
const winston_1 = __importDefault(require("winston"));
const prisma = new client_1.PrismaClient();
const addCustomFieldForProfession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    if (!payload) {
        winston_1.default.info("Got bad payload from Client");
        (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.BAD_REQUEST, false, customMessages_1.customMessages.BAD_REQUEST);
    }
    winston_1.default.info(`Received payload from client :: ${JSON.stringify(payload)}`);
    let customFormField;
    const customFormFieldArray = [];
    try {
        for (let i = 0; i < payload.length; i++) {
            console.log("saving....");
            const data = Object.assign(Object.assign({}, payload[i]), { userId: "e012efc5-c673-4da8-832a-721eb7941454" });
            console.log("Data being saved to db: ", data);
            customFormField = yield prisma.customFormFields.create({
                data,
            });
            console.log("saved");
            customFormFieldArray.push(customFormField);
        }
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientValidationError) {
            console.log("Error while saving the fields: ", error);
        }
    }
    (0, statusHandler_1.statusHandler)(res, customStatusCode_1.statusCodes.SUCCESS, true, "Fields addded successfully", customFormFieldArray);
});
exports.addCustomFieldForProfession = addCustomFieldForProfession;
