const express = require('express');
const router = express.Router();

// GET BLOG MODEL
const Post = require('../models/post');

//
// GET ALL POST
//
router.get('/', (req, res) => {

    Post.find({}, (err, posts) => {
        if (err) console.log(err);
        res.render('posts', { pageTitle: 'All Post', posts: posts });
    });

});
//
// SHOW SINGLE POST
//
router.get('/:id', (req, res) => {

    Post.findOne({_id: req.params.id}, (err, post) => {

        if (err) console.log(err)

        res.render('singlePost', { pageTitle: post.title, post: post });
    });

});
//
// CREATE BLOG POST
//
router.post('/', (req, res) => {

    // FORMAT DATE TO USE TIME AGO FORMAT
    var date = '';
    var day = new Date().getDate().toString();
    var month = new Date().getMonth();
        month += 1;
        month = month.toString();
    var year = new Date().getFullYear().toString();

    // ADD CERO TO SINGLE DIGIT DAYS
    if (day.length < 2) {
        day = '0' + day;
    }
    // ADD CERO TO SINGLE DIGIT MONTH
    if (month.length < 2) {
        month = '0' + month;
    }

    date = year + month + day;


    // CREATE POST
    const post = new Post({
        title: req.body.postTitle,
        author: req.body.postAuthor,
        image: req.body.postImage,
        content: req.body.postContent,
        datePublished: date
    });

    //SAVE POST
    post.save( (err) => {
        if (err) console.log(err);
        res.redirect('/');
    });

});

//
// ADD NEW POST
//
router.get('/new', (req, res) => {

    res.render('postNew', { pageTitle: 'Create Post' });

});

module.exports = router;
