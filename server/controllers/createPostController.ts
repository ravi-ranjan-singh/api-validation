import { Request, Response } from "express";
import db from "../db";

const createPostController = async (req: Request, res: Response) => {
  const postData = req.body;
  try {
    const { data } = await db.createPost(postData);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default createPostController;
