const router = require('express-promise-router')();
const CheckAuth=require('../middleware/check-auth');
const LensType= require('../controllers/lenstypecontroller');

router.route("/")
    .get((CheckAuth),LensType.getAllLensType)
    .post((CheckAuth),LensType.addNew)

router.route("/:uuid")
    .put((CheckAuth),LensType.updateLensType)
    .delete((CheckAuth),LensType.deleteLensType)

router.route("/findone")
    .get((CheckAuth),LensType.findLensType)  
    
    
module.exports = router; 