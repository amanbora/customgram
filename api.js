var express = require('express');
var app = express();
var pathRoutes = require('./api/routes/path');


//static files(css, js)
app.use(express.static(__dirname+'/public'));

//set view engine
app.set('view engine','ejs');

app.use('/',pathRoutes);

app.listen(8080,()=>{
    console.log("listening at port 8080");
});

