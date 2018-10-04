const router = require('express-promise-router')();
/*Business logic in Controller */
const InvoiceOrderController = require('../controllers/invoiceordercontroller');
const db = require('../config/dbconfig');


router.route('/')
.get(InvoiceOrderController.getInvoiceList)
.post(InvoiceOrderController.addinvoiceorder);

module.exports = router;