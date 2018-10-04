const router = require('express-promise-router')();
/*Business logic in Controller */
const CompanyController = require('../controllers/companyController');
const db = require('../config/dbconfig');
//const CompanyUser =  db.companyuserinfo;

router.route("/")
.post(CompanyController.registerCompany)

router.route("/:companyname")
.get(CompanyController.getDetails)
.put(CompanyController.updateDetails)

module.exports = router;

