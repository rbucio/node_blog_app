const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('blogNew', { pageTitle: 'Create Post' });
})


module.exports = router;
