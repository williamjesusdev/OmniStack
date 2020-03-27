"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _OngController = require('./controllers/OngController'); var _OngController2 = _interopRequireDefault(_OngController);
var _SessionController = require('./controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _ProfileController = require('./controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);
var _IncidentController = require('./controllers/IncidentController'); var _IncidentController2 = _interopRequireDefault(_IncidentController);

const routes = _express2.default.Router();

// Criamos uma rota raiz com uma mensagem de sucesso
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "success", project: "Be The Hero" });
});

// Criamos uma rota para o Login na API
routes.post("/sessions", _SessionController2.default.create);

// Criamos as rotas referentes a Tabela ONGS
routes.get("/ongs", _OngController2.default.index);
routes.post("/ongs", _OngController2.default.create);

// Criamos as rotas referentes ao Perfil da ONG
routes.get("/profile", _ProfileController2.default.index);

// Criamos as rotas referentes a Tabela INCIDENTS
routes.get("/incidents", _IncidentController2.default.index);
routes.get("/incidents/:id", _IncidentController2.default.show);
routes.post("/incidents", _IncidentController2.default.create);
routes.delete("/incidents/:id", _IncidentController2.default.delete);

exports. default = routes;
