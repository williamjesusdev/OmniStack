const axios = require("axios");

const Dev = require("../models/Dev");
const { findConnections, sendMessage } = require("../websocket");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async create(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    const techsArray = techs ? parseStringAsArray(techs) : [];
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, bio, avatar_url } = response.data;

      dev = await Dev.create({
        name,
        bio,
        location,
        avatar_url,
        github_username,
        techs: techsArray
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray
      );
      sendMessage(sendSocketMessageTo, "newDev", dev);
    } else {
      return res.json({
        message: `O usuário '${github_username}' já existe na base de dados!`
      });
    }

    return res.json(dev);
  },

  async read(req, res) {
    const { github_username } = req.params;
    const dev = await Dev.findOne({ github_username });

    return res.json(
      dev === null
        ? {
            message: `O usuário '${github_username}' não existe na base de dados do GitHub!`
          }
        : dev
    );
  },

  async update(req, res) {
    const { github_username } = req.params;
    const { latitude, longitude, techs, ...rest } = req.body;
    rest.github_username = github_username;

    var dev = await Dev.findOne({ github_username });

    const techsArray = techs ? parseStringAsArray(techs) : [dev.techs];

    if (latitude && longitude) {
      var newLocation = {
        type: "Point",
        coordinates: [longitude, latitude]
      };
    }

    const newDev = await Dev.updateOne(
      { github_username },
      {
        location: latitude && longitude ? newLocation : dev.location,
        techs: techs ? techsArray : dev.techs,
        ...rest
      }
    );

    dev = await Dev.findOne({ github_username });

    return res.json({
      modifiedCount: newDev.nModified,
      ok: newDev.ok,
      user: dev
    });
  },

  async delete(req, res) {
    const { github_username } = req.params;
    await Dev.deleteOne({ github_username });
    return res.json({
      message: `O usuário '${github_username}' foi deletado da base de dados!`
    });
  }
};
