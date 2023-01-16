import { Request, Response } from "express";
import db from "../db";

interface RequestBody {
  title: string;
  body: string;
  userId: string;
}

function validator(body: RequestBody) {
  const isBodyEmpty = Object.keys(body).length > 0;
  if (isBodyEmpty)
    return {
      error: "Body is empty",
    };
  if (!body.title.trim())
    return {
      error: "missing required data: title",
    };
  if (!body.body.trim())
    return {
      error: "missing required data: body",
    };
  if (!body.userId.trim())
    return {
      error: "missing required data: userId",
    };

  return {
    error: null,
  };
}

const createPostController = async (
  req: Request<{}, {}, RequestBody>,
  res: Response
) => {
  const data = req.body;
  const validationResult = validator(data);
  if (validationResult.error) {
    res.status(400).json({
      message: "missing required data",
    });
  }
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
