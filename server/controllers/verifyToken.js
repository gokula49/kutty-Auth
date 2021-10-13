const jwt = require('jsonwebtoken');

module.exports= function(req,res,next){
    const token=req.header('auth-token');

    if(!token)return res.status(400).send('access denied');
    try{
        const verified=jwt.verify(token,process.env.tokenkey);
        console.log('acs success');

        next();
    }catch(err){
        console.log('token invalid');

        res.status(400).send('Invalid token');
    }
}