const router = require('express-promise-router')();

const SalesOrder = require('../controllers/salesordercontroller');

router.route('/')
.post(SalesOrder.newSalesOrder)


router.route('/:companyId')  
.get(SalesOrder.getAllSalesOrder)

router.route('/year/:year/:companyId')
.get(SalesOrder.getAllSalesByYear);

router.route('/month/:month/:companyId')
.get(SalesOrder.getAllSalesByMonth);


module.exports = router;