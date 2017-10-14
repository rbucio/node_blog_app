const mongoose = require('mongoose');

// BLOG SCHEMA
const BlogSchema = mongoose.Schema({
    blogTitle: String,
    blogAuthor: String,
    blogImage: String,
    blogContent: String
}, { timestamps: true });

const Blog = module.exports = mongoose.model('Blog', BlogSchema);
