const router = require('express-promise-router')();
/*Business logic in Controller */
const EmployeeController = require('../controllers/companyEmpController');
const db = require('../config/dbconfig');
//const CompanyUser =  db.companyuserinfo;

router.route("/:companyId")
.post(EmployeeController.addNewEmployee)

router.route("/:empid/company/:companyId")
.get(EmployeeController.getEmpDetails)
.put(EmployeeController.updateEmpDetails)
//.delete(EmployeeController.deleteEmpDetails)

router.route("/:companyId")
.get(EmployeeController.getAllEmpDetails);


module.exports = router;