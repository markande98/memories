import express, { Response, Request } from "express";
import prismadb from "../lib/prismadb";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const userId = req.query?.userId as string;
    const photos = await prismadb.photos.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(photos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, imageUrl } = req.body;
    const imageResponse = await prismadb.photos.create({
      data: {
        userId,
        imageUrl,
      },
    });

    return res.status(200).json(imageResponse);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    const { userId, id, isLiked } = req.body;

    const imgRes = await prismadb.photos.update({
      where: {
        id,
        userId,
      },
      data: {
        isLiked,
      },
    });

    return res.status(200).json(imgRes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    const { id, userId } = req.body;
    const deletedPhoto = await prismadb.photos.delete({
      where: {
        id,
        userId,
      },
    });

    return res.status(201).json(deletedPhoto);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      error: error,
    });
  }
});

export default router;
