import "dotenv/config";
import cors from "cors";
import express from "express";

import routes from "./routes";

// Importa as variaveis de ambiente .env
const { LOCALE, HOME_URL, WORK_URL, PORT } = process.env;

const app = express();

// Permite acesso externo
app.use(cors());

// Desativa o X-Powered-By: Express
app.disable("x-powered-by");

// Adcionamos o arquivo de rotas ao app
app.use(routes);

// Passamos a porta e endereço onde o servidor ficará ouvindo
app.listen(PORT || 3333, () => {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `[running] server on http://localhost:${PORT} | http://${
      LOCALE === "HOME" ? HOME_URL : WORK_URL
    }:${PORT}`
  );
});
