const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


// CONNECT TO DATABASE
// mongoose.connect('mongodb://localhost/blogApp', (err) => {
//     if (err) return console.log(err);
//     console.log('CONNECTION TO DB SUCCESFULL!');
// })

// INITIALIZE APP
const app = express();

// SET VIEW ENGINE
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

// SET PATH TO PUBLIC FOLDER
app.use(express.static(path.join(__dirname + '/public')));


//
// MIDDLEWARE
//
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//
// ROUTES
//
const appRoutes = require('./routes/app.js');
const blogRoutes = require('./routes/blog.js');

app.use('/', appRoutes);
app.use('/blog', blogRoutes);

app.listen(3000, () => {
    console.log('SERVER IS RUNNING!')
})
