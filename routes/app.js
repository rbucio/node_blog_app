const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Blogly' });
})


module.exports = router;