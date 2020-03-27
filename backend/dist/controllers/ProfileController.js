"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);

exports. default = {
  async index(req, res) {
    const { authorization: ong_id } = req.headers;

    const incidents = await _connection2.default.call(void 0, "incidents")
      .select("*")
      .where("ong_id", ong_id);

    return res.status(200).json(incidents);
  },
};
