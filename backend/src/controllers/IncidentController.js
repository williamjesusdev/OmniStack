import connection from "../database/connection";

export default {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ])
      .limit(5)
      .offset((page - 1) * 5);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(200).json(incidents);
  },
  async show(req, res) {
    const { id } = req.params;

    const incident = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ])
      .where("incidents.id", id)
      .first();

    return res.status(200).json(incident);
  },
  async create(req, res) {
    const { authorization: ong_id } = req.headers;
    const { title, description, value } = req.body;

    const [id] = await connection("incidents").insert({
      ong_id,
      title,
      description,
      value,
    });

    return res.status(201).json({ id, ...req.body, ong_id });
  },
  async delete(req, res) {
    const { id } = req.params;
    const { authorization: ong_id } = req.headers;

    const incident = await connection("incidents")
      .select("ong_id")
      .where("id", id)
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operation not permitted!" });
    }

    await connection("incidents").where("id", id).delete();

    return res.status(204).send();
  },
};
