import express from "express";

const routes = express.Router();

// Criamos uma rota raiz com o texto Hello World!
routes.get("/", (req, res) => {
  res.status(200).json({ message: "success", project: "Be The Hero" });
});

export default routes;
