const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
<<<<<<< HEAD
    const spots = await Spot.find({ techs: { $regex: new RegExp(tech, "i") } });
=======
    const spots = await Spot.find({ techs: { $regex: new RegExp(`^${tech}$`, "i") } });
>>>>>>> 13e1e4629e991da96fd0475be008ce2782e6a245

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User does not exists" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(",").map(tech => tech.trim())
    });

    return res.json(spot);
  }
};
