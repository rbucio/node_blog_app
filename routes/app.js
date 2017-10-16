const express = require('express');
const router = express.Router();

// GET POST MODEL
const Post = require('../models/post');

router.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Blogly' });
})


module.exports = router;
