const router = require('express-promise-router')();
/*Business logic in Controller */
const CompanyController = require('../controllers/companyController');
const db = require('../config/dbconfig');
//const CompanyUser =  db.companyuserinfo;
const CheckAuth=require('../middleware/check-auth');
const UploadImage=require('../middleware/upload-image');
// const multer = require('multer');
// const upload = multer({dest:'uploads/'});
router.route("/")
.post((UploadImage),CompanyController.registerCompany)
router.route("/adminlogin")
.post(CompanyController.Adminlogin)
router.route("/username")
.get((CheckAuth),CompanyController.Username)
router.route("/employeelogin")
.post(CompanyController.Employeelogin)
router.route("/:companyname")
.get(CompanyController.getDetails)
.put(CompanyController.updateDetails)



// router.get('/username', verifyToken, function(req,res,next){
//   return res.status(200).json(decodedToken);
// })
// var decodedToken='';
// function verifyToken(req,res,next){
//   let token = req.query.token;

//   jwt.verify(token,'secret', function(err, tokendata){
//     if(err){
//       return res.status(400).json({message:' Unauthorized request'});
//     }
//     if(tokendata){
//       decodedToken = tokendata;
//       next();
//     }
//   })
// }
module.exports = router;

