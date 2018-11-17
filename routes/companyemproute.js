const router = require('express-promise-router')();
/*Business logic in Controller */
const EmployeeController = require('../controllers/companyEmpController');
//const CompanyUser =  db.companyuserinfo;
const CheckAuth=require('../middleware/check-auth');
const UploadImageEmployee=require('../middleware/upload-image-Employee');
router.route("/add")
.post((CheckAuth),(UploadImageEmployee),EmployeeController.addNewEmployee)
router.route("/get")
.get((CheckAuth),EmployeeController.getAllEmpDetails)

router.route("/employeelogin")
.post(EmployeeController.Employeelogin);
router.route("/getone/:id")
.get((CheckAuth),EmployeeController.getEmpDetails)
router.route("/update/:id")
.put((UploadImageEmployee),EmployeeController.updateEmpDetails)
//.delete(EmployeeController.deleteEmpDetails)

router.route("/email")
.post(EmployeeController.emailEmpDetails)





module.exports = router;