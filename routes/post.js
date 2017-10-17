const express = require('express');
const router = express.Router();

// GET BLOG MODEL
const Post = require('../models/post');

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
// EDIT POST
//
router.get('/:id/edit', (req, res) => {

    Post.findOne({_id: req.params.id}, (err, post) => {
        if (err) console.log(err);

        res.render('editPost', {pageTitle: 'Edit ' + post.title, post: post});
    });

});
//
// UPDATE POST
//
router.post('/:id', (req, res) => {

    Post.findOne({_id: req.params.id}, (err, post) => {
        if (err) console.log(err);

        post.title = req.body.postTitle;
        post.author = req.body.postAuthor;
        post.image = req.body.postImage;
        post.content = req.body.postContent;

        post.save((err) => {
            if (err) console.log(err);

            res.redirect('/posts/' + post._id + '/edit');
        })
    })
})
module.exports = router;
