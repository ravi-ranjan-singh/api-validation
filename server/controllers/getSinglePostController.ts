import { Request, Response } from "express";
import db from "../db";

const getSinglePostController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const response = await db.getPost(id);
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

export default getSinglePostController;
