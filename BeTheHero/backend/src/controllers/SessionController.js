import connection from "../database/connection";

export default {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs").select("name").where("id", id).first();

    if (!ong) {
      return res.status(400).json({ error: "No ONG Found with this ID!" });
    }

    return res.status(200).json(ong);
  },
};
