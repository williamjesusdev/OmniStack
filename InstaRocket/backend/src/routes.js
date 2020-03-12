const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const CommentController = require('./controllers/CommentController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);

routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/delete', PostController.delete);

routes.post('/posts/:id/like', LikeController.store);

routes.post('/posts/:id/comment', CommentController.store);
routes.post('/posts/:id/commentLike', CommentController.like);
routes.post('/posts/:id/commentDelete', CommentController.delete);


module.exports = routes;