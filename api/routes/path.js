const router = require('express').Router();


//redirect uri 
var redirect = 'http://localhost:8080/handleAuth';



router.get('/handleAuth',function(req,res){
    //retrieves the code that was passed along as a query to the '/handleAuth' route and uses this code to construct an access token
    insta.authorize_user(req.query.code,redirectUri,  function(err,result){
        if(err)res.send(err);
        // store this access_token in a global variable called accessToken
      
        accessToken=result.access_token;
        res.redirect('/');
    
    });
})

router.get('/',function(req,res){
        insta.use({
            access_token : accessToken
        });

        insta.user_media_recent('access_token.split('.')[0]', function(err,result,pagination,remaining,limit){
            if(err)res.json(err);

            //pass the json to ejs template
            res.render('pages/index',{instagram : result});

        });
});



module.exports = router;