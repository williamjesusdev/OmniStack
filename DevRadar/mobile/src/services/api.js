import axios from "axios";
import { LOCALE, WORK_API, HOME_API, PROD_API } from "react-native-dotenv";

const api = axios.create();

api.defaults.baseURL =
  LOCALE === "HOME" ? HOME_API : LOCALE === "WORK" ? WORK_API : PROD_API;

export default api;
