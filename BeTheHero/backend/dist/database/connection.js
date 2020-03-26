"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _knex = require("knex");
var _knex2 = _interopRequireDefault(_knex);

var _knexfile = require("../../knexfile");
var _knexfile2 = _interopRequireDefault(_knexfile);

const connection = _knex2.default.call(void 0, _knexfile2.default.development);

exports.default = connection;
