import axios from "axios";
import { getToken } from "./auth";
import baseUrl from "../config/envs";

const api = axios.create({
  baseURL: baseUrl
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
