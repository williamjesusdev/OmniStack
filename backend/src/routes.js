import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

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
routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  SessionController.create
);

// Criamos as rotas referentes a Tabela ONGS
routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngController.create
);

// Criamos as rotas referentes ao Perfil da ONG
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

// Criamos as rotas referentes a Tabela INCIDENTS
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);
routes.get(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.show
);
routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  IncidentController.create
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  IncidentController.delete
);

export default routes;
