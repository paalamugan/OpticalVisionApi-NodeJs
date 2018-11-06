const router = require('express-promise-router')();
const CheckAuth=require('../middleware/check-auth');
const FrameMaterial= require('../controllers/framematerialcontroller');

router.route("/")
    .post((CheckAuth),FrameMaterial.addNew)
    .get((CheckAuth),FrameMaterial.getAllFrameMaterial)

router.route("/:framematerialId")
    .put((CheckAuth),FrameMaterial.updateFrameMaterial)
    .delete((CheckAuth),FrameMaterial.deleteFrameMaterial)
    
// router.route("/:companyId")
//     .get(FrameMaterial.getAllFrameMaterial)


   module.exports = router; 