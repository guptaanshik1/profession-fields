import { Router } from "express";

const router: Router = Router();

import { createUser } from "../controllers/userController";

router.post("/create", createUser);

export default router;
