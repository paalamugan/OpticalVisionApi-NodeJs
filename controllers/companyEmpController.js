const db=require('../config/dbconfig');
const EmpInfo = db.companyEmpInfo;
const EmpSignInInfo = db.employeeSingnInInfo;
const Company = db.companyuserinfo;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt= require('bcrypt');
const env = require('../config/env.js');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
exports.addNewEmployee = async(req,res,next)=>{
    
    //  let empIdCnt;
    //  let compName;
    // await Company.findById(req.body.uuid).then(companyname=>{
    //     compName = companyname.companyname
    //  });
    //   console.log("compname:"+JSON.stringify(compName));
    // await EmpInfo.findAndCountAll({
    //     where:{fk_companyid : req.body.uuid}
    // }).then(totEmpCount=>{
    //     console.log(JSON.stringify(totEmpCount))
    //     empIdCnt = totEmpCount.count+1
    // });
    // console.log("Employee Count valu::"+empIdCnt);
    var data=req.userData;
    await EmpInfo.findOne({
        where :{
            employeeEmail : req.body.employeeEmail,
            fk_companyid:req.body.uuid
        }     
    }).then(registeremp=>{
        if(registeremp!=null){
        if(registeremp.employeeName == req.body.employeeName){
            res.status(401).send("Already This Employee name registered");
        }else if(registeremp.employeeEmail == req.body.employeeEmail){
            res.status(401).send("Already This Employee Email registered")
        }
    }
        else{
            bcrypt.hash(req.body.employeePassword,10,(err,hash)=>{
                if(err){
                    return res.status(401).send('Invalid data');
                }else{
                    EmpInfo.count({
                        where:{
                            fk_companyid:req.body.uuid
                        }
                    }).then((count)=>{
                     count=count+1;
                    EmpInfo.create({
                        customid:count,
                   employeeId :data.companyname+'-'+count,
                  employeeName : req.body.employeeName,
                 
                  mobileNumber:req.body.mobileNumber,
                 
                  employeeEmail : req.body.employeeEmail,
                   employeePassword:hash,
                  address:req.body.address,
                  DOB:req.body.DOB,
                  DOJ:req.body.DOJ,
                  adminAccess:req.body.adminAccess,
                  fk_companyid:req.body.uuid,
                   userImage: req.body.userImage
              }).then(empregistered=>{
                res.status(200).send(empregistered);
                //   EmpSignInInfo.create({
                //       email : empregistered.employeeEmail,
                //       password : empregistered.employeePassword,
                //       adminaccess : empregistered.adminAccess,
                //       employeeId : empregistered.employeeId,
                //        fk_companyid:empregistered.fk_companyid
                //   }).then(()=>{
                //       res.status(200).send(empregistered);
                //   })
              }) 
            });
                }
            });

          
        }
    });
};
exports.Employeelogin = async(req,res,next)=>{
    console.log(req.body);
    await  EmpInfo.findOne({
         where:{employeeEmail :req.body.email},
         include: [{
            model: Company
        }]
      }).then(employeedetail=>{
          if(!employeedetail){
            return res.status(401).send('Email is not Registerd');
          }else{
              console.log(JSON.stringify(employeedetail));
            bcrypt.compare(req.body.password,employeedetail.employeePassword,(err,result)=>{

                if(!result){
                    return res.status(401).send('Password is Incorrect');
                }
                if(result){
                    const employeevalue="employee";
                    const token =jwt.sign({
                        username:employeedetail.employeeName,
                        userImage:employeedetail.userImage,
                        companyname:employeedetail.companyuserinfo.companyname,
                        companyId:employeedetail.companyuserinfo.uuid,
                        Identifier:employeevalue,
                        employee:employeedetail
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
exports.getEmpDetails = async(req,res,next)=>{
    var data=req.userData;
    EmpInfo.findOne({
        where :{
           uuid:req.params.id,
           fk_companyid :data.companyId
        }
    }).then(empinfo=>{
        console.log(JSON.stringify(empinfo))
        res.send(empinfo);
    })
}
exports.updateEmpDetails = async(req,res,next)=>{
    console.log(req.body);
    await EmpInfo.findById(req.params.id).then((data)=>{
       let empdetails=JSON.stringify(data);
       if(empdetails.employeePassword==req.body.employeePassword){
         EmpInfo.update({            
                        employeeName : req.body.employeeName,
                         mobileNumber:req.body.mobileNumber,
                        employeeEmail : req.body.employeeEmail,
                         employeePassword:req.body.employeePassword,
                        address:req.body.address,
                        DOB:req.body.DOB,
                        DOJ:req.body.DOJ,
                        adminAccess:req.body.adminAccess,
                         userImage:req.body.userImage,
                    },{
                        where :{[Op.and]:[{employeeId:req.body.employeeId},{fk_companyid:req.body.fk_companyid}]}
                    }).then((emp)=>{
                      res.status(200).send(emp);
                           
                    }).catch(err=>{
                        console.log("Error in employee update ::"+err)
                    })
        console.log(empdetails);
       }else{
        bcrypt.hash(req.body.employeePassword,10,(err,hash)=>{
            if(err){
                return res.status(401).send('Invalid data');
            }else{
                EmpInfo.update({            
                    employeeName : req.body.employeeName,
                     mobileNumber:req.body.mobileNumber,
                    employeeEmail : req.body.employeeEmail,
                     employeePassword:hash,
                    address:req.body.address,
                    DOB:req.body.DOB,
                    DOJ:req.body.DOJ,
                    adminAccess:req.body.adminAccess,
                     userImage:req.body.userImage,
                },{
                    where :{[Op.and]:[{employeeId:req.body.employeeId},{fk_companyid:req.body.fk_companyid}]}
                }).then((emp)=>{
                    res.status(200).send(emp);
                       
                }).catch(err=>{
                    console.log("Error in employee update ::"+err)
                })
            }
        });
           
       }

    })
    //        await EmpInfo.update({
    //            
    //             employeeName : req.body.employeeName,
    //              mobileNumber:req.body.mobileNumber,
    //             employeeEmail : req.body.employeeEmail,
   //               employeePassword:req.body.employeePassword,
    //             address:req.body.address,
    //             DOB:req.body.DOB,
    //             DOJ:req.body.DOJ,
    //             adminAccess:req.body.adminAccess,
    //              userImage:req.body.userImage,
    //         },{
    //             where :{[Op.and]:[{employeeId:req.body.employeeId},{fk_companyid:req.body.fk_companyid}]}
    //         }).then(()=>{
    //            
    //                
    //         }).catch(err=>{
    //             console.log("Error in employee update ::"+err)
    //         })
     }

    exports.getAllEmpDetails = async(req,res)=>{
        console.log( req.userData);
        var data=req.userData;
        EmpInfo.findAndCountAll({
             where:{ fk_companyid :data.companyId},
             include:[{
                 model:Company
             }]
         }).then(result=>{
             res.status(200).send(result.rows);
         })
        }
    exports.emailEmpDetails=async(req,res)=>{
        const output=`
        <h1>Hi ${req.body.username},</h1>
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
            to: 'paalamugan@gmail.com', // list of receivers
            subject: 'Optic Vision Application', // Subject line
            text: 'Optic Vision',// plain text body
            html:output//html body
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if(err){
                return console.log(err)
            }
             else{
                console.log('Message sent:%s',info.messageId);
            }
             
         });
    }
       //  exports.getAllEmpDetails = async(req,res)=>{
            // var transporter =  nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //       user: 'paalamugan@gmail.com',
            //       pass: 'paalamugan@'
            //     }
            //   });
            //   var mailOptions = {
            //     from: 'paalamugan@gmail.com',
            //     to: 'paalamugan44@gmail.com',
            //     subject: 'Sending Email using Node.js',
            //     text: 'That was easy!'
            //   };
            //   transporter.sendMail(mailOptions, function(error, info){
            //     if (error) {
            //       console.log(error);
            //     } else {
            //       console.log('Email sent: ' + info.response);
            //     }
            //   });
            // EmpInfo.find({
            //     include: [{
            //         model: Company
            //     }]
            //     // where:{companyuserinfoId :req.params.companyId}
            //  }).then(result=>{
            //    res.send(result);
            //  })
   // }


