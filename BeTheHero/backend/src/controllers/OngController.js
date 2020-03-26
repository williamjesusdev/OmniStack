import crypto from "crypto";

import connection from "../database/connection";

export default {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.status(200).json(ongs);
  },
  async show(req, res) {},
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX").toUpperCase();

    await connection("ongs").insert({
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
