import axios from "axios";

const baseURL = process.env.BASE_URL || "http://localhost:3333";

const api = axios.create({
  baseURL
});

export default api;
