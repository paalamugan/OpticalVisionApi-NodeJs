
const router = require('express-promise-router')();
const Eyepowercontroller = require('../controllers/eyepowercontroller');
const db =require('../config/dbconfig');

router.route("/")
.get(Eyepowercontroller.findAll)
.post(Eyepowercontroller.addNew)

router.route("/:customername")
.get(Eyepowercontroller.findEyeDetail)
.put(Eyepowercontroller.updateEyeDetail)


module.exports = router;
