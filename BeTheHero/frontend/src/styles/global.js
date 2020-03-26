import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #app{
  font: 400 14px Roboto, Arial, Helvetica, sans serif;
  background: #f0f0f5;
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
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}
`;
