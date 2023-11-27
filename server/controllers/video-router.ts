import express, { Request, Response } from "express";

import prismadb from "../lib/prismadb";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const userId = req.query?.userdId as string;

    const videos = await prismadb.videos.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
});

router.get("/favorites", async (req: Request, res: Response) => {
  try {
    const userId = req.query?.userdId as string;

    const videos = await prismadb.videos.findMany({
      where: {
        userId,
        isLiked: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, videoUrl } = req.body;
    const videoResponse = await prismadb.videos.create({
      data: {
        userId,
        videoUrl,
      },
    });
    return res.status(200).json(videoResponse);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    const { userId, id, isLiked } = req.body;

    const vidRes = await prismadb.videos.update({
      where: {
        id,
        userId,
      },
      data: {
        isLiked,
      },
    });

    return res.status(200).json(vidRes);
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
    const deletedVideo = await prismadb.videos.delete({
      where: {
        id,
        userId,
      },
    });

    return res.status(200).json(deletedVideo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
});

export default router;
