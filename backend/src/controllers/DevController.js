const axios = require('axios')
const Dev = require('../models/Devs')

module.exports = {
  async index(req, res) {
    const { logged = null } = req.headers
    if (!logged) {
      return res.status(400).json({ error: 'Not Logged' })
    }
    const loggedDev = await Dev.findById(logged)

    const users = await Dev.find({
      $and: [
        { _id: { $ne: logged } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    })

    return res.json(users)
  },
  async store(req, res) {
    const { username: user } = req.body
    const response = await axios.get(`https://api.github.com/users/${user}`)
    const { name, bio, avatar_url } = response.data

    const userExists = await Dev.findOne({ user })

    if (userExists) {
      return res.json(userExists)
    }

    const dev = await Dev.create({ user, name, bio, avatar_url })

    return res.json(dev)
  }
}