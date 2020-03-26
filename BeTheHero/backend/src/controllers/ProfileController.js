import connection from "../database/connection";

export default {
  async index(req, res) {
    const { authorization: ong_id } = req.headers;

    const incidents = await connection("incidents")
      .select("*")
      .where("ong_id", ong_id);

    return res.status(200).json(incidents);
  },
};
