import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/hello", (req: Request, res: Response) => {
  res.send("Test");
});

export default router;
