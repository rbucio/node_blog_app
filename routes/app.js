const express = require('express');
const router = express.Router();

// GET POST MODEL
const Post = require('../models/post');

//
// DISPLAY ALL POST ON HOME PAGE
//
router.get('/', (req, res) => {

    Post.find({}, (err, posts) => {
        if (err) console.log(err);
        res.render('home', { pageTitle: 'Blogly', posts: posts });
    });

});


module.exports = router;
