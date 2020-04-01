import connection from "../database/connection";
import generateUniqueId from "../utils/generateUniqueId";

export default {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.status(200).json(ongs);
  },
  async show(req, res) {},
  async create(req, res) {
    let id;
    const { name, email, whatsapp, city, uf } = req.body;

    const ong = await connection("ongs").select("*").where({ name, email });
    console.log(ong);
    const ongsId = await connection("ongs").select("id");
    console.log(ongsId);

    if (ong.length > 0) {
      return res.status(400).json({ error: "ONG already exists in database!" });
    }

    do {
      id = generateUniqueId();
    } while (ongsId.includes(id));

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
