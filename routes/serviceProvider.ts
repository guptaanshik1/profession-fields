import { Router } from "express";
import {
  getFieldsForProfession,
  takeProfession,
} from "../controllers/serviceProviderController";

const router = Router();

router.post("/take-profession", takeProfession);
router.get("/get-fields", getFieldsForProfession);

export default router;
