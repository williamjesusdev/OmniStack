import axios from "axios";
import envs from "../config/envs";

const baseURL = envs.URL;

const api = axios.create({
  baseURL: baseURL
});

export default api;
