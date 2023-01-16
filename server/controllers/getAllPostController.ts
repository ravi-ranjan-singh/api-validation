import { Request, Response } from "express";
import db from "../db";

const getAllPostController = async (req: Request, res: Response) => {
  try {
    const { data } = await db.getAllPost();
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

export default getAllPostController;
