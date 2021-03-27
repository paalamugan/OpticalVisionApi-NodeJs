const db = require("../config/dbconfig");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const CompanyUser = db.companyuserinfo;
const SignInInfo = db.signInInfo;
const ForgetPassword = db.forgetpassword;

const bcrypt = require("bcrypt");
const env = require("../config/env.js");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const saltRounds = 10;

exports.registerCompany = async (req, res, next) => {

    req.body.avatar = '/' + (req.file && req.file.path || 'images/avatar.png');

    try {

        let company = await CompanyUser.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email }
                ],
            },
        });

        if (company && company.email === req.body.email) {
            throw new Error("Already email registered!");
        }

        req.body.password =  await bcrypt.hash(req.body.password, saltRounds);

        let user = await CompanyUser.create(req.body);

        let signInfo = await SignInInfo.create({ 
            fk_companyid: user.uuid, 
            username: user.email,
            password: user.password
        });

        return res.json(signInfo);
        
        const output = `<h1>Hi ${user.userName},</h1> <p style="font-size: 16px;">Thank you for registered in Optic Vision Application.</p>`;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "paalamugan26@gmail.com",
                pass: "lrenkrodvraufrfn",
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: '"Optic Vision" <paalamugan44@gmail.com>', // sender address
            to: user.email, // list of receivers
            subject: "Optic Vision Application", // Subject line
            text: "Optic Vision", // plain text body
            html: output, //html body
        };

        transporter.sendMail(mailOptions, function (err, info) {

            if (err) {
                throw err;
            }

            console.log("Message sent:%s", info.messageId);
            return res.json(signInfo);
        });

    } catch (err) {
        next(err);
    }

};

exports.Adminlogin = async (req, res, next) => {
  await CompanyUser.findOne({
    where: { email: req.body.email },
  })
    .then((admin) => {
      if (!admin) {
        return next(new Error("Email is not Registerd"));
      } else {
        bcrypt.compare(req.body.password, admin.password, (err, result) => {
          if (!result) {
            return next(new Error("Password is Incorrect"));
          } else {
            // const Company_admin=`ADMIN-${Date.now()}-${admin.uuid}`;
            const adminvalue = "admin";
            const token = jwt.sign(
              {
                userName: admin.userName,
                companyName: admin.companyName,
                companyId: admin.uuid,
                Identifier: adminvalue,
                company: admin,
              },
              env.JWT_KEY,
              {
                expiresIn: "1d",
              }
            );

            return res.status(200).json({
              token: token,
              Identifier: adminvalue,
            });
          }
          return res.status(401).json({
            error: "Auth Failed",
          });
        });
      }
    })
    .catch((err) => {
      next(err);
    });
};
exports.Username = async (req, res, next) => {
  return res.status(200).send(req.userData);
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
};
exports.DeleteCompany = async (req, res, next) => {
  await CompanyUser.destroy({
    where: { uuid: req.params.uuid },
  })
    .then(() => {
      return res.send({ success: true });
    })
    .catch((err) => {
      return res.status(401).send("UnAuthorized Request");
    });
};

exports.ForgetPassword = async (req, res, next) => {
  await CompanyUser.findOne({
    where: { email: req.body.email },
  }).then((admin) => {
    if (!admin) {
      return res.status(300).send("Email is not Registerd");
    } else {
      ForgetPassword.findOne({
        where: { fk_companyid: admin.uuid },
      }).then((forgetpass) => {
        if (!forgetpass) {
          let date = Date.now();
          ForgetPassword.create({
            tempPassword: date,
            fk_companyid: admin.uuid,
          }).then((temppassword) => {
            const output = `
                        <h1>Hi ${admin.username},</h1>
                        <p>Your Temporary Password is:${temppassword.tempPassword}</p>
                        <a href="http://localhost:4200/forgetpassword/${temppassword.uuid}" target="_blank">Please Click here to verify ur password</a>
                        `;
            var transporter = nodemailer.createTransport({
              // host:'mail.opticvision.com',
              //  port:110,
              service: "gmail",
              auth: {
                user: "paalamugan44@gmail.com",
                pass: "paalamugan44@",
              },
              tls: {
                rejectUnauthorized: false,
              },
            });
            const mailOptions = {
              from: '"Optic Vision" <paalamugan44@gmail.com>', // sender address
              to: `${admin.email}`, // list of receivers
              subject: "Optic Vision-Forget Password", // Subject line
              text: "Optic Vision", // plain text body
              html: output, //html body
            };
            transporter.sendMail(mailOptions, function (err, info) {
              if (err) {
                return console.log(err);
              } else {
                return res.status(200).send({ success: true });
              }
            });
          });
        } else {
          let date = Date.now();
          ForgetPassword.update(
            { tempPassword: date },
            { where: { fk_companyid: admin.uuid } }
          ).then(() => {
            ForgetPassword.findOne({
              where: { fk_companyid: admin.uuid },
            }).then((temppassword) => {
              const output = `
                                <h1>Hi ${admin.username},</h1>
                                <p>Your Temporary Password is:${temppassword.tempPassword}</p>
                                <a href="http://localhost:4200/forgetpassword/${temppassword.uuid}" target="_blank">Please Click here to verify ur password</a>
                                `;
              var transporter = nodemailer.createTransport({
                // host:'mail.opticvision.com',
                //  port:110,
                service: "gmail",
                auth: {
                  user: "paalamugan26@gmail.com",
                  pass: "paalamuganmail26@",
                },
                tls: {
                  rejectUnauthorized: false,
                },
              });
              const mailOptions = {
                from: '"Optic Vision" <paalamugan44@gmail.com>', // sender address
                to: `${admin.email}`, // list of receivers
                subject: "Optic Vision-Forget Password", // Subject line
                text: "Optic Vision", // plain text body
                html: output, //html body
              };
              transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                  return console.log(err);
                } else {
                  return res.status(200).send({ success: true });
                }
              });
            });
          });
        }
      });
    }
  });
};
exports.GetForgetPassword = async (req, res, next) => {
  await ForgetPassword.findById(req.params.id).then((data) => {
    if (!data) {
      return res.status(300).send("No Record Found");
    } else {
      return res.status(200).send(data);
    }
  });
};
exports.UpdateForgetPassword = async (req, res, next) => {
  await CompanyUser.findById(req.params.id).then((company) => {
    if (!company) {
      return res.status(401).send("UnKnown Request");
    } else {
      bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
        if (err) {
          return res.status(300).send("Not Valid data");
        } else {
          CompanyUser.update(
            { password: hash },
            { where: { uuid: req.params.id } }
          ).then(() => {
            ForgetPassword.destroy({
              where: { uuid: req.body.uuid },
            }).then(() => {
              return res.json({ success: true });
            });
          });
        }
      });
    }
  });
};
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

exports.getDetails = async (req, res, next) => {
  CompanyUser.findOne({
    where: { uuid: req.params.id },
  })
    .then((companydetail) => {
      if (companydetail != null) {
        res.status(200).send(companydetail);
      } else {
        res
          .status(300)
          .send("No company register with the name :" + req.params.companyname);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.updateDetails = async (req, res, next) => {
  await CompanyUser.findOne({
    where: { uuid: req.params.companyId },
  }).then((companydetail) => {
    if (companydetail != null) {
      if (companydetail.password == req.body.password) {
        CompanyUser.update(
          {
            companyname: req.body.companyname,
            username: req.body.username,
            phonenumber: req.body.phonenumber,
            email: req.body.email,
            address: req.body.address,
            tin: req.body.tin,
            password: req.body.password,
            userImage: req.body.userImage,
          },
          {
            where: { uuid: req.params.companyId },
          }
        )
          .then((company) => {
            return res.status(200).send(company);
          })
          .catch((err) => {
            console.log("Error in Company update ::" + err);
          });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(300).send("Invalid data");
          } else {
            CompanyUser.update(
              {
                companyname: req.body.companyname,
                username: req.body.username,
                phonenumber: req.body.phonenumber,
                email: req.body.email,
                address: req.body.address,
                tin: req.body.tin,
                password: hash,
                userImage: req.body.userImage,
              },
              {
                where: { uuid: req.params.companyId },
              }
            )
              .then((company) => {
                return res.status(200).send(company);
              })
              .catch((err) => {
                console.log("Error in Company update ::" + err);
              });
          }
        });
      }
    } else {
      return res
        .status(300)
        .send("No record avaiable for :" + req.params.companyname);
    }
  });
};
