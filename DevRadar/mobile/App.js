import React from "react";
import { StatusBar, LogBox } from "react-native";

import Routes from "./src/routes";
LogBox.ignoreLogs(["Unrecognized WebSocket"]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}
