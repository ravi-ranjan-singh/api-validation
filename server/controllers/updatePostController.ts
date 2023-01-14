import { Request, Response } from "express";
import db from "../db";

const updatePostController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const response = await db.updatePost(id, data);
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

export default updatePostController;
