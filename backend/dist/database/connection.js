"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);

var _knexfile = require('../../knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);

const config =
  process.env.NODE_ENV === "test"
    ? _knexfile2.default.test
    : _knexfile2.default.development;

const connection = _knex2.default.call(void 0, config);

exports. default = connection;
