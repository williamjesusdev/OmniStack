import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle, main, dark } from "./styles/global";

import Logon from "./pages/Logon";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import NewIncident from "./pages/NewIncident";

export default function Routes() {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme === "main" ? main : dark);
    } else {
      localStorage.setItem("theme", "main");
      setTheme(main);
    }
  }, []);

  function toggleTheme() {
    if (localStorage.getItem("theme") === "main") {
      localStorage.setItem("theme", "dark");
      setTheme(dark);
    } else {
      localStorage.setItem("theme", "main");
      setTheme(main);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Logon {...props} toggleTheme={toggleTheme} theme={theme} />
            )}
          />
          <Route
            exact
            path="/profile"
            render={props => (
              <Profile {...props} toggleTheme={toggleTheme} theme={theme} />
            )}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <Register {...props} toggleTheme={toggleTheme} theme={theme} />
            )}
          />
          <Route
            exact
            path="/incidents/new"
            render={props => (
              <NewIncident {...props} toggleTheme={toggleTheme} theme={theme} />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
