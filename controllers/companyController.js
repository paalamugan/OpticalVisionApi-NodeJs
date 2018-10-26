const db=require('../config/dbconfig');
const Sequelize = require('sequelize');
const Op=Sequelize.Op;
const CompanyUser = db.companyuserinfo;
const SignInInfo = db.signInInfo;
const ForgetPassword = db.forgetpassword;

const bcrypt= require('bcrypt');
const env = require('../config/env.js');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
exports.registerCompany = async(req,res,next)=>{
    await CompanyUser.findOne({
       where:{[Op.or]:[{email:req.body.email},{companyname:req.body.companyName}]}
      }).then(companychk=>{
        if(companychk !=null){
            if(companychk.email==req.body.email){
                return res.status(300).send(' Already Email  Registered');
            }
            else if(companychk. companyname==req.body.companyName){
                return res.status(300).send(' Already Company Name Registered');
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
                            const output=`
                            <h1>Hi ${registeredcompany.username},</h1>
                            <p>Thank you for Registered My Optic Vision Application</p>
                            `;
                            var transporter = nodemailer.createTransport({
                               // host:'mail.opticvision.com',
                              //  port:110,
                                service: 'gmail',
                                auth: {
                                       user: 'paalamugan44@gmail.com',
                                       pass: 'paalamugan44@'
                                   },
                                   tls:{
                                       rejectUnauthorized:false
                                   }
                               });
                               const mailOptions = {
                                from: '"Optic Vision" <paalamugan44@gmail.com>', // sender address
                                to: `${registeredcompany.email}`, // list of receivers
                                subject: 'Optic Vision Application', // Subject line
                                text: 'Optic Vision',// plain text body
                                html:output//html body
                              };
                              transporter.sendMail(mailOptions, function (err, info) {
                                if(err){
                                    return console.log(err)
                                }
                               
                                    console.log('Message sent:%s',info.messageId);
                                    return res.status(200).send(signinfo);

                                 
                             });
                           
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
        if(!admin){
            return res.status(300).send('Email is not Registerd');
        }
        else{
            bcrypt.compare(req.body.password,admin.password,(err,result)=>{

                if(!result){
                    return res.status(300).send('Password is Incorrect');
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
exports.ForgetPassword= async(req,res,next)=>{
    await CompanyUser.findOne({
        where:{email :req.body.email}
     }).then(admin=>{
         if(!admin){
    return res.status(300).send('Email is not Registerd');
        }else{
             ForgetPassword.findOne({
                where:{fk_companyid:admin.uuid}
            }).then(forgetpass=>{
                if(!forgetpass){
                    let date=Date.now();
                    ForgetPassword.create({
                        tempPassword:date,
                        fk_companyid:admin.uuid
                    }).then((temppassword)=>{
                        const output=`
                        <h1>Hi ${admin.username},</h1>
                        <p>Your Temporary Password is:${temppassword.tempPassword}</p>
                        <a href="http://localhost:4200/forgetpassword/${temppassword.uuid}" target="_blank">Please Click here to verify ur password</a>
                        `;
                        var transporter = nodemailer.createTransport({
                           // host:'mail.opticvision.com',
                          //  port:110,
                            service: 'gmail',
                            auth: {
                                   user: 'paalamugan44@gmail.com',
                                   pass: 'paalamugan44@'
                               },
                               tls:{
                                   rejectUnauthorized:false
                               }
                           });
                           const mailOptions = {
                            from: '"Optic Vision" <paalamugan44@gmail.com>', // sender address
                            to: `${admin.email}`, // list of receivers
                            subject: 'Optic Vision-Forget Password', // Subject line
                            text: 'Optic Vision',// plain text body
                            html:output//html body
                          };
                          transporter.sendMail(mailOptions, function (err, info) {
                            if(err){
                                return console.log(err)
                            }else{
                                return res.status(200).send(
                                    {success:true}
                                );
                            }
                           
                                
            
                             
                         });
                    })
                }else{
                    let date=Date.now();
                   ForgetPassword.update(
                        {tempPassword:date},  
                        {where:{fk_companyid:admin.uuid}}).then(()=>{
                            ForgetPassword.findOne({where:{fk_companyid:admin.uuid}}).then(temppassword=>{
                                const output=`
                                <h1>Hi ${admin.username},</h1>
                                <p>Your Temporary Password is:${temppassword.tempPassword}</p>
                                <a href="http://localhost:4200/forgetpassword/${temppassword.uuid}" target="_blank">Please Click here to verify ur password</a>
                                `;
                                var transporter = nodemailer.createTransport({
                                   // host:'mail.opticvision.com',
                                  //  port:110,
                                    service: 'gmail',
                                    auth: {
                                           user: 'paalamugan44@gmail.com',
                                           pass: 'paalamugan44@'
                                       },
                                       tls:{
                                           rejectUnauthorized:false
                                       }
                                   });
                                   const mailOptions = {
                                    from: '"Optic Vision" <paalamugan44@gmail.com>', // sender address
                                    to: `${admin.email}`, // list of receivers
                                    subject: 'Optic Vision-Forget Password', // Subject line
                                    text: 'Optic Vision',// plain text body
                                    html:output//html body
                                  };
                                  transporter.sendMail(mailOptions, function (err, info) {
                                    if(err){
                                        return console.log(err)
                                    }else{
                                        return res.status(200).send(
                                            {success:true}
                                        );
                                    }
                                   
                                        
                    
                                     
                                 });
                            })
                         
                      
                    })
                }
            })
           
           
             }
     })
}
exports.GetForgetPassword=async (req,res,next)=>{
await ForgetPassword.findById(req.params.id).then((data)=>{
    if(!data){
        return res.status(300).send("No Record Found");
    }else{
        return res.status(200).send(data);
    }

})
}
exports.UpdateForgetPassword=async(req,res,next)=>{
    await CompanyUser.findById(req.params.id).then(company=>{
        if(!company){
            return res.status(401).send("UnKnown Request");
        }else{
            bcrypt.hash(req.body.newPassword,10,(err,hash)=>{
                if(err){
                    return res.status(300).send("Not Valid data");
                }else{ 
                CompanyUser.update(
                    {password:hash},
                    {where:{uuid:req.params.id}}
                ).then(()=>{
                        ForgetPassword.destroy({
                            where:{uuid:req.body.uuid}
                        }).then(()=>{
                            return res.json({success:true});
                        })
                })
            }
            });
        }
       
    })
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
        if(companydetail != null){
            res.status(200).send(companydetail);
        }else{
            res.status(300).send("No company register with the name :"+req.params.companyname)
        }
    }).catch(err=>{
        console.log(err);
    })
}
exports.updateDetails = async(req,res,next)=>{
  await CompanyUser.findOne({
        where:{uuid :req.params.companyId}
     }).then(companydetail=>{
         if(companydetail !=null){
             if(companydetail.password == req.body.password){
                CompanyUser.update({
                    companyname : req.body.companyname,
                    username : req.body.username,
                    phonenumber : req.body.phonenumber,
                    email : req.body.email,
                    address:req.body.address,
                    tin:req.body.tin,
                    password:req.body.password,
                    userImage: req.body.userImage
                },
                {
                    where:{uuid:req.params.companyId}
                }).then((company)=>{
                    res.status(200).send(company);
                }).catch(err=>{
                    console.log("Error in Company update ::"+err)
                })
             }else{
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err){
                        return res.status(300).send('Invalid data');
                    }else{

                        CompanyUser.update({
                            companyname : req.body.companyname,
                            username : req.body.username,
                            phonenumber : req.body.phonenumber,
                            email : req.body.email,
                            address:req.body.address,
                            tin:req.body.tin,
                            password:hash,
                            userImage: req.body.userImage
                        },
                        {
                            where:{uuid:req.params.companyId}
                        }).then((company)=>{
                            res.status(200).send(company);
                        }).catch(err=>{
                            console.log("Error in Company update ::"+err)
                        })
                    }


                });
             
            }
    }else{
        res.status(300).send("No record avaiable for :"+req.params.companyname)
    }
     })
}