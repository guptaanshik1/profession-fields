"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceProviderController_1 = require("../controllers/serviceProviderController");
const router = (0, express_1.Router)();
router.post("/take-profession", serviceProviderController_1.takeProfession);
router.get("/get-fields", serviceProviderController_1.getFieldsForProfession);
exports.default = router;
