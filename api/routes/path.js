const router = require('express').Router();
var insta = require('instagram-node').instagram();
var keys = require('./../../keys');
var name = require('../../public/js/like');
var accessToken='';


insta.use({
    client_id : keys.instagram.client_id,
    client_secret : keys.instagram.client_secret
});


//redirect uri 
var redirectUri = keys.urls.redirecturi;


router.get('/authorize', function(req,res){
    res.redirect(insta.get_authorization_url(redirectUri));
})


router.get('/handleAuth',function(req,res){
    //retrieves the code that was passed along as a query to the '/handleAuth' route and uses this code to construct an access token
    insta.authorize_user(req.query.code,redirectUri,  function(err,result){
        if(err)res.send(err);
        // store this access_token in a global variable called accessToken
        
        accessToken=result.access_token;
        
        res.redirect('/path');
    
    });
});

router.get('/',function(req,res){
    res.render('pages/menu');

});



router.get('/profile',function(req,res){
        insta.use({
            access_token : accessToken
            
        });

        insta.user_media_recent(accessToken.split('.')[0], function(err, result, pagination, remaining, limit) {
            if(err)res.json(err);

            //pass the json to ejs template
            res.render('pages/profile',{instagram : result});

        });
});

router.get('/like',function(req,res){
    res.render('pages/like');

})



module.exports = router;