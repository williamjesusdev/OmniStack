import { createGlobalStyle } from "styled-components";

export const main = {
  title: "main",
  primary: "#e02041",
  second: "#41414d",
  paragraph: "#737380",
  foreground: "#262626",
  background: "#f0f0f5",
  support: "#dcdce6",
  accent: "#fff"
};

export const dark = {
  title: "dark",
  primary: "#e02041",
  second: "#f0f0f5",
  paragraph: "#f0f0f5",
  foreground: "#f0f0f5",
  background: "#262626",
  support: "#737380",
  accent: "#fff"
};

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #app{
  font: 400 14px Roboto, Arial, Helvetica, sans serif;
  background: ${props => props.theme.background};
  -webkit-font-smoothing: antialiased;
}

input, button, textarea{
  font: 400 18px Roboto, Arial, Helvetica, sans serif;
}

button{
  cursor: pointer;
}

form input{
  width: 100%;
  height: 60px;
  color: ${props => props.theme.title !== "main" && props.theme.background};
  border: 1px solid ${props => props.theme.support};;
  border-radius: 8px;
  padding: 0 24px;
}
`;
