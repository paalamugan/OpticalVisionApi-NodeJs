const db=require('../config/dbconfig');
const Sequelize = require('sequelize');
const Op=Sequelize.Op;
const CompanyUser = db.companyuserinfo;
const SignInInfo = db.signInInfo;

const bcrypt= require('bcrypt');
const env = require('../config/env.js');
const jwt = require('jsonwebtoken');
// const multer = require('multer');
// const upload = multer({dest:'uploads/'}).single('photo');
exports.registerCompany = async(req,res,next)=>{
    await CompanyUser.findOne({
       where:{[Op.or]:[{email:req.body.email},{companyname:req.body.companyName}]}
      }).then(companychk=>{
        if(companychk !=null){
            if(companychk.email==req.body.email){
                return res.status(401).send(' Already Email  Registered');
            }
            else if(companychk. companyname==req.body.companyName){
                return res.status(401).send(' Already Company Name Registered');
            }
          
        }
       
        else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(err){
                return res.status(401).send('Invalid data');
            }else{
                    CompanyUser.count().then((count)=>{
                
                        count=count+1;
                       CompanyUser.create({
                        customid:count,
                        companyname : req.body.companyName,
                        username : req.body.userName,
                        phonenumber : req.body.phoneNumber,
                        email : req.body.email,
                        address:req.body.address,
                        tin:req.body.tinNumber,
                        password:hash,
                        userImage: req.body.userImage
                    }).then(registeredcompany=>{
                        SignInInfo.create({
                            fk_companyid:registeredcompany.uuid,
                            username:registeredcompany.email,
                            password:registeredcompany.password
                        }).then((signinfo)=>{
                            return res.status(200).send(signinfo);
                        })
                        
                    })
                });
                
                
        }});
            
           
        }
      
    })
};
exports.Adminlogin = async(req,res,next)=>{
   await CompanyUser.findOne({
       where:{email :req.body.email}
    }).then(admin=>{
       console.log(admin)
        if(!admin){
            return res.status(401).send('Email is not Registerd');
        }
        else{
            bcrypt.compare(req.body.password,admin.password,(err,result)=>{

                if(!result){
                    return res.status(401).send('Password is Incorrect');
                }
                else{
                    const adminvalue="admin";
                    const token =jwt.sign({
                        username:admin.username,
                        userImage:admin.userImage,
                        companyname:admin.companyname,
                        companyId:admin.uuid,
                        Identifier:adminvalue,
                        company:admin
                     },
                     env.JWT_KEY,
                     {
                         expiresIn:"1d"
                     }
                     );
                    
                     return res.status(200).json({
                         token:token
                     });
                 }
                 return res.status(401).json({
                    error:'Auth Failed'
                });
            });
           
        }
        
    }).catch(err=>{
        console.log(err);
    })
}
exports.Username= async(req,res,next)=>{
    var data=req.userData;
    return res.status(200).send(data);
// function verifyToken(req,res,next){
  //let token = req.query.token;

//   await jwt.verify(token,'secret', function(err, tokendata){
//     if(err){
//       return res.status(401).json({message:' Unauthorized request'});
//     }
//     if(tokendata){
//       decodedToken = tokendata;
//       next();
//      }
//    })
 
//     return res.status(200).json(decodedToken);
}

// exports.Employeelogin = async(req,res,next)=>{
//   await  CompanyUser.findOne({
//        where:{companyname :req.params.companyname}
//     }).then(companydetail=>{
//         if(null !=companydetail){
//             res.status(200).send(companydetail);
//         }else{
//             res.send("No company register with the name :"+req.params.companyname)
//         }
//     }).catch(err=>{
//         console.log(err);
//     })
// }

exports.getDetails = async(req,res,next)=>{
    CompanyUser.findOne({
       where:{companyname :req.params.companyname}
    }).then(companydetail=>{
        if(null !=companydetail){
            res.send(companydetail);
        }else{
            res.send("No company register with the name :"+req.params.companyname)
        }
        console.log("companydetail"+companydetail);
    }).catch(err=>{
        console.log(err);
    })
}
exports.updateDetails = async(req,res,next)=>{
    CompanyUser.findOne({
        where:{companyname :req.params.companyname}
     }).then(companydetail=>{
         if(companydetail !=null){
        CompanyUser.update({
            where:{companyname :req.params.companyname},
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            mobilenumber : req.body.mobilenumber,
            email : req.body.email,
            Address:req.body.Address,
            TIN:req.body.TIN,
            password:req.body.password
        },
        {
            where:{companyname:req.params.companyname}
        }).then(()=>{
            res.send("Details has been updated sucesafully ::"+req.params.companyname);
        })
    }else{
        res.send("No record avaiable for :"+req.params.companyname)
    }
     })
}