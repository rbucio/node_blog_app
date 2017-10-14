const express = require('express');
const router = express.Router();

// GET BLOG MODEL
const Blog = require('../models/blog');

router.get('/new', (req, res) => {
    res.render('blogNew', { pageTitle: 'Create Post' });
})


module.exports = router;
