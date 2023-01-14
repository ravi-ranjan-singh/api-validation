import axios from "axios";

const JSON_PLACEHOLDER_API_URL = "https://jsonplaceholder.typicode.com";

const db = {
  getAllPost: () => axios.get(`${JSON_PLACEHOLDER_API_URL}/posts`),
  getPost: (id: string) => axios.get(`${JSON_PLACEHOLDER_API_URL}/posts/${id}`),
  createPost: (data: { title: string; body: string; userId: string }) =>
    axios.post(`${JSON_PLACEHOLDER_API_URL}/posts`, data),
  updatePost: (
    id: string,
    data: { title: string; body: string; userId: string }
  ) => axios.patch(`${JSON_PLACEHOLDER_API_URL}/posts/${id}`, data),
};

export default db;
