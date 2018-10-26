const jwt =require('jsonwebtoken');
const env = require('../config/env.js');
module.exports = async(req,res,next)=>{
try{
    const token = req.headers.authorization.split(' ')[1];
    const payload = await jwt.verify(token,env.JWT_KEY);
    req.userData = payload;
    next();
}catch(error)
{
    return res.status(401).send('Unauthorized request');
    
}
  
   
}