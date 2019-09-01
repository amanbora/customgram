var express = require('express');
var app = express();
var pathRoutes = require('./api/routes/path');


//static files(css, js)
app.use('/public',express.static(__dirname+'/public'));

//set view engine
app.set('view engine','ejs');

app.use('/path',pathRoutes);

app.listen(8080,()=>{
    console.log("listening at port 8080");
});

