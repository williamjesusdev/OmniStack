import express from "express";

import OngController from "./controllers/OngController";
import SessionController from "./controllers/SessionController";
import ProfileController from "./controllers/ProfileController";
import IncidentController from "./controllers/IncidentController";

const routes = express.Router();

// Criamos uma rota raiz com uma mensagem de sucesso
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "success", project: "Be The Hero" });
});

// Criamos uma rota para o Login na API
routes.post("/sessions", SessionController.create);

// Criamos as rotas referentes a Tabela ONGS
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Criamos as rotas referentes ao Perfil da ONG
routes.get("/profile", ProfileController.index);

// Criamos as rotas referentes a Tabela INCIDENTS
routes.get("/incidents", IncidentController.index);
routes.get("/incidents/:id", IncidentController.show);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

export default routes;
