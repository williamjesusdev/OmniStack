const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    },
    comments: [{
        author: String,
        message: String,
        createdAt: Date,
        likes: {
            type: Number,
            default: 0
        }
    }]
},{
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);