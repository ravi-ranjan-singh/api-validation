import { Request, Response } from "express";
import { z } from "zod";
import db from "../db";

const RequestSchema = z.object({
  title: z.string().trim().min(1),
  body: z.string().trim().min(1),
  userId: z.string().trim().min(1),
  tags: z.string().optional(),
});

type RequestBody = z.infer<typeof RequestSchema>;

function validatorWithZod(body: RequestBody) {
  return RequestSchema.safeParse(body);
}

const createPostController = async (
  req: Request<{}, {}, RequestBody>,
  res: Response
) => {
  const data = req.body;
  const validationResult = validatorWithZod(data);
  if (!validationResult.success)
    res.status(400).json({
      errors: validationResult.error,
    });

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
