"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _crypto = require("crypto");
var _crypto2 = _interopRequireDefault(_crypto);

var _connection = require("../database/connection");
var _connection2 = _interopRequireDefault(_connection);

exports.default = {
  async index(req, res) {
    const ongs = await _connection2.default.call(void 0, "ongs").select("*");

    return res.status(200).json(ongs);
  },
  async show(req, res) {},
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = _crypto2.default.randomBytes(4).toString("HEX").toUpperCase();

    await _connection2.default.call(void 0, "ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.status(201).json({ id, ...req.body });
  },
};
