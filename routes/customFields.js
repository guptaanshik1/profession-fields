"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customFieldsController_1 = require("../controllers/customFieldsController");
const router = (0, express_1.Router)();
router.post("/add-fields", customFieldsController_1.addCustomFieldForProfession);
exports.default = router;
