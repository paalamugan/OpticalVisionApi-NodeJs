const router = require('express-promise-router')();
/*Business logic in Controller */
const CustomerController = require('../controllers/customercontroller');
const db = require('../config/dbconfig');
const Customer =  db.customer;

var request = require('request');



router.route('/:name/company/:companyId')
//.delete(CustomerController.deleteCustomer)
.get(CustomerController.getCustomer)
.put(CustomerController.updateCustomer);

// /api/visionapp/customer/find/8
router.route('/:companyId',(req,res,next)=>{
    console.log("req value ::"+req)
})
.get(CustomerController.findAllByCompany);

module.exports = router;



