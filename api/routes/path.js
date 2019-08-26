const router = require('express').Router();


//redirect uri 
var redirect = 'http://localhost:8080/handleAuth';



router.get('/handleAuth',function(req,res){
    insta.authorize_user(req.query.code,redirectUri,  function(err,result){
        if(err)res.send(err);

        accessToken=result.access_token;
        res.redirect('/');
    
    });
})

module.exports = router;