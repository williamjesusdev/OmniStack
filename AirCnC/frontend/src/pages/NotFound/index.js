import React from "react";
import "./styles.css";

import logo from "../../assets/404.svg";

export default function ErrorNotFound() {
  return (
    <div id="error">
      <img id="errorImg" src={logo} alt="IMG" />
      <h2 id="errorText">Oops! That page can’t be found.</h2>
      <a id="errorLink" href="/">
        Go Back
      </a>
    </div>
  );
}
