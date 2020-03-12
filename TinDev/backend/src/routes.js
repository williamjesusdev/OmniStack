const routes = require('express').Router()

const Dev = require('./controllers/DevController')
const Like = require('./controllers/LikeController')
const Dislike = require('./controllers/DislikeController')

routes.get('/devs', Dev.index)
routes.post('/devs', Dev.store)

routes.post('/devs/:devId/likes', Like.store)
routes.post('/devs/:devId/dislikes', Dislike.store)

routes.all('*', (req, res) => {
  return res.status(404).json({ error: 'Not Found Route!' })
})

module.exports = routes