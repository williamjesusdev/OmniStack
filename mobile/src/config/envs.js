import _default from "expo-constants";

const baseURL = _default.manifest.bundleUrl.substring(0, 18);

module.exports = {
  APP_NAME: "AirCnC",

  //Basic
  PORT: 3333,
  URL: `${baseURL}:3333`
};
