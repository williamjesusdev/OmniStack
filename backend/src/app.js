import "dotenv/config";
import express from "express";
import cors from "cors";
import { errors } from "celebrate";

import routes from "./routes";

const app = express();

// Permite acesso externo
app.use(cors());

// Transforma o corpo da requisição em JSON
app.use(express.json());

// Desativa o X-Powered-By: Express
app.disable("x-powered-by");

// Adcionamos o arquivo de rotas ao app
app.use(routes);

app.use(errors());

export default app;
