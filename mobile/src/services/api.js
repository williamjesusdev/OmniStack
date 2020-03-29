import axios from "axios";
import { LOCALE, WORK_API, HOME_API, PROD_API } from "react-native-dotenv";

const baseURL =
  LOCALE === "HOME"
    ? "http://" + HOME_API
    : LOCALE === "WORK"
    ? "http://" + WORK_API
    : PROD_API;

const api = axios.create({ baseURL });

export default api;
