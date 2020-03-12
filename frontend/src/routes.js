import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/new" component={New} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
