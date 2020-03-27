import axios from "axios";

const env = process.env;
const LOCALE = env.REACT_APP_LOCALE;

const baseURL =
  LOCALE === "HOME"
    ? "http://" + env.REACT_APP_HOME_API
    : LOCALE === "WORK"
    ? "http://" + env.REACT_APP_WORK_API
    : env.REACT_APP_PROD_API;

const api = axios.create({ baseURL });

export default api;
