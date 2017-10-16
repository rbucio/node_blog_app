const mongoose = require('mongoose');

// BLOG SCHEMA
const PostSchema = mongoose.Schema({
    title: String,
    author: String,
    image: String,
    content: String,
    datePublished: String
});

const Post = module.exports = mongoose.model('Post', PostSchema);
