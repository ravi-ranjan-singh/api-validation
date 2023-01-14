import { Request, Response } from "express";
import db from "../db";

const createPostController = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const response = await db.createPost(data);
    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default createPostController;
