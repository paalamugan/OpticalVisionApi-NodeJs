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
    await EmpInfo.findOne({
        where :{
            employeeEmail : req.body.employeeEmail,
            fk_companyid:req.body.uuid
        }     
    }).then(registeremp=>{
        if(registeremp!=null){
        if(registeremp.employeeName===req.body.employeeName){
           return res.status(300).send({error:"Already This Employee name registered",data:req.body});
        }else if(registeremp.employeeEmail===req.body.employeeEmail){
           return res.status(300).send({error:"Already This Employee Email registered",data:req.body})
        }
    }
        else{
            bcrypt.hash(req.body.employeePassword,10,(err,hash)=>{
                if(err){
                    return res.status(300).send({error:'Invalid data',data:req.body});
                }else{
                    if(req.file===undefined || req.file===null){
                        var Imagepath='/uploads/noavatar.png';
                        req.body.userImage=Imagepath;
                    }
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
               return res.status(200).send(empregistered);
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
    await  EmpInfo.findOne({
         where:{employeeEmail :req.body.email},
         include: [{
            model: Company
        }]
      }).then(employeedetail=>{
          if(!employeedetail){
            return res.status(300).send('Email is not Registerd');
          }else{
              if(employeedetail.adminAccess==='yes'){
                bcrypt.compare(req.body.password,employeedetail.employeePassword,(err,result)=>{

                    if(!result){
                        return res.status(300).send('Password is Incorrect');
                    }
                    if(result){
                        // const Company_employee=`EMPLOYEE-${Date.now()}-${employeedetail.uuid}`;
                        const employeevalue="employee-admin";
                        const token =jwt.sign({
                            username:employeedetail.employeeName,
                            userImage:employeedetail.userImage,
                            companyname:employeedetail.companyuserinfo.companyname,
                            companyId:employeedetail.companyuserinfo.uuid,
                            Identifier:employeevalue,
                            employee:employeedetail,
                            company:employeedetail.companyuserinfo,
                         },
                         env.JWT_KEY,
                         {
                             expiresIn:"1d"
                         }
                         );
                       
                         return res.status(200).json({
                             token:token,
                             Identifier:employeevalue
                         });
                     }
                     return res.status(401).json({
                        error:'Auth Failed'
                    });
                });
              }else{
            bcrypt.compare(req.body.password,employeedetail.employeePassword,(err,result)=>{

                if(!result){
                    return res.status(300).send('Password is Incorrect');
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
                         token:token,
                         Identifier:employeevalue
                     });
                 }
                 return res.status(401).json({
                    error:'Auth Failed'
                });
            });
        }
          }
         
      }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
      })
  }
exports.getEmpDetails = async(req,res,next)=>{
    EmpInfo.findOne({
        where :{
           uuid:req.params.id,
           fk_companyid :req.userData.companyId
        }
    }).then(empinfo=>{
       return res.send(empinfo);
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
      })
}
exports.updateEmpDetails = async(req,res,next)=>{
    await EmpInfo.findOne({where:{uuid:req.params.id}}).then((data)=>{
        if(data.dataValues.employeePassword===req.body.employeePassword){
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
                     return res.status(200).send(emp);
                           
                    }).catch(err=>{
                        return res.status(401).send("UnAuthorized Request");
                    })
        
       }else{
        bcrypt.hash(req.body.employeePassword,10,(err,hash)=>{
            if(err){
                return res.status(300).send('Invalid data');
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
                   return res.status(200).send(emp);
                       
                }).catch(err=>{
                    return res.status(401).send("UnAuthorized Request");
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
      await EmpInfo.findAndCountAll({
             where:{ fk_companyid :req.userData.companyId},
             include:[{
                 model:Company
             }]
         }).then(result=>{
            return res.status(200).send(result.rows);
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
       


