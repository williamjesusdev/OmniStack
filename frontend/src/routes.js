import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Main} />
    </BrowserRouter>
  );
}
