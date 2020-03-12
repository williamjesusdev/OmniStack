const env = process.env;

const url =
  env.REACT_APP_LOCALE === "HOME"
    ? env.REACT_APP_HOME_URL
    : env.REACT_APP_WORK_URL;

const baseURL = `http://${url}`;

export default baseURL;
