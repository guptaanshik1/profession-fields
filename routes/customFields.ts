import { Router } from "express";
import { addCustomFieldForProfession } from "../controllers/customFieldsController";

const router = Router();

router.post("/add-fields", addCustomFieldForProfession);

export default router;
