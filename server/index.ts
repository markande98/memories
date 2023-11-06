import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import imageRouter from "./controllers/image-router";
import videoRouter from "./controllers/video-router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/photos", imageRouter);
app.use("/videos", videoRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello from server",
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
