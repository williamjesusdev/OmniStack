const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id);

        const {author, message}= req.body;

        post.comments.push({
            author: author,
            message: message,
            createdAt: new Date
        });

        await post.save();

        req.io.emit('comment', post);

        return res.json(post);
    },
    async like(req, res) {
        const post = await Post.findOne({"comments._id": req.params.id});

        post.comments.forEach(element => {
            element._id == req.params.id ? element.likes +=1 : element;
        });

        await post.save();

        req.io.emit('like', post);

        return res.json(post);
    },
    async delete(req, res) {
        const post = await Post.findOne({"comments._id": req.params.id});

        post.comments.pull({
            _id: req.params.id,
        })

        await post.save();

        req.io.emit('delete', post);

        return res.json(post);
    }
};