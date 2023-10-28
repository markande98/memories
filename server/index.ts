import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import imageRouter from "./controllers/image-router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/photos", imageRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello from server",
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
