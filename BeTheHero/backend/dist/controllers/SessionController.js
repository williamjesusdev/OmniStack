"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _connection = require("../database/connection");
var _connection2 = _interopRequireDefault(_connection);

exports.default = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await _connection2.default
      .call(void 0, "ongs")
      .select("name")
      .where("id", id)
      .first();

    if (!ong) {
      return res.status(400).json({ error: "No ONG Found with this ID!" });
    }

    return res.status(200).json(ong);
  },
};
