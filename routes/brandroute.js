const router = require('express-promise-router')();
const CheckAuth=require('../middleware/check-auth');
const Brand= require('../controllers/brandcontroller');

router.route("/")
    .post((CheckAuth),Brand.addNew)
    .get((CheckAuth),Brand.getAllFrameMaterial)

router.route("/:uuid")
    .put((CheckAuth),Brand.updateFrameMaterial)
    .delete((CheckAuth),Brand.deleteFrameMaterial)
    
// router.route("/:companyId")
//     .get(FrameMaterial.getAllFrameMaterial)


   module.exports = router; 