import { Request, Response } from "express";
import db from "../db";

const getAllPostController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const response = await db.getAllPost();
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

export default getAllPostController;
