import express, { Response, Request } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    Message: "Hello from image server",
  });
});

export default router;
