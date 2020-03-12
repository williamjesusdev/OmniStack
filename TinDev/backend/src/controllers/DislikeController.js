const Dev = require('../models/Devs')

module.exports = {
  async store(req, res) {
    const { logged } = req.headers
    const { devId } = req.params

    const loggedDev = await Dev.findById(logged)
    const targetDev = await Dev.findById(devId)

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' })
    }

    loggedDev.dislikes.push(targetDev._id)
    await loggedDev.save()

    return res.json(loggedDev)
  }
}