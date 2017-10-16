const express = require('express');
const router = express.Router();

// GET BLOG MODEL
const Post = require('../models/post');

router.get('/', (req, res) => {

    //GET ALL POSTS
    Post.find({}, (err, posts) => {
        if (err) console.log(err);
        res.render('posts', { pageTitle: 'All Post', posts: posts });
    });
});

router.post('/', (req, res) => {

    // // FORMAT DATE TO USE TIME AGO FORMAT
    // var date = '';
    // var day = new Date().getDate().toString();
    // var month = new Date().getMonth();
    //     month += 1;
    //     month = month.toString();
    // var year = new Date().getFullYear().toString();
    //
    // // ADD CERO TO SINGLE DIGIT DAYS
    // if (day.length < 2) {
    //     day = '0' + day;
    // }
    // // ADD CERO TO SINGLE DIGIT MONTH
    // if (month.length < 2) {
    //     month = '0' + month;
    // }
    //
    // date = year + month + day;
    //
    //
    // // CREATE POST
    // const post = new Post({
    //     title: req.body.postTitle,
    //     author: req.body.postAuthor,
    //     image: req.body.postImage,
    //     content: req.body.postContent,
    //     datePublished: date
    // });
    //
    // //SAVE POST
    // post.save( (err) => {
    //     if (err) console.log(err);
    //     res.redirect('/');
    // });

    var date = new Date();
    var utfOffset = date.getTimezoneOffset();
    var localTime = date.getTime();
    var localOffset = utfOffset * 60000;
    var offset = -8;
    var utc = localTime + localOffset;
    var pacificTime = utc + (3600000 * offset);
    var newDate = new Date(pacificTime);

    var time = 420 * 60000;

    console.log('420 * 60000 is ' + time)
    console.log('Date is ' + date);
    console.log('Time offset is ' + utfOffset);
    console.log('The local offset time is ' + localOffset);
    console.log(newDate);

    res.redirect('/');
});

router.get('/new', (req, res) => {
    res.render('postNew', { pageTitle: 'Create Post' });
});

module.exports = router;
