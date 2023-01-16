import { Request, Response } from "express";
import db from "../db";

const updatePostController = async (req: Request, res: Response) => {
  const postData = req.body;
  console.log(req.body);
  const id = req.params.id;
  console.log(id);
  console.log(postData);
  try {
    const { data } = await db.updatePost(id, postData);
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

export default updatePostController;
