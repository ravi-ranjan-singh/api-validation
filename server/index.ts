import express from "express";
import getAllPostController from "./controllers/getAllPostController";
import getSinglePostController from "./controllers/getSinglePostController";
import createPostController from "./controllers/createPostController";
import updatePostController from "./controllers/updatePostController";
import createPostControllerWithZod from "./controllers/createPostControllerWithZod";

const app = express();

app.use(express.json());

app.get("/posts", getAllPostController);
app.get("/posts/:id", getSinglePostController);
app.post("/posts", createPostController);
app.post("/posts-zod", createPostControllerWithZod);
app.patch("/posts/:id", updatePostController);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
