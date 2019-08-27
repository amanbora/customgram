var express = require('express');
var app = express();
var insta = require('instagram-node').instagram;
var pathRoutes = require('./api/routes/path');


//static files(css, js)
app.use(express.static(__dirname+'/public'));

//set view engine
app.set('view engine','ejs');

insta.use({
    client_id : ' c8e249694daa489d9f2e9b81ee300f90',
    client_secret : ' bfd6bfb3cfd54a518e67166c9bb16fef'
});


app.use('/path',pathRoutes);