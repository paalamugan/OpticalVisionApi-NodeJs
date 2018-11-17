const router = require('express-promise-router')();
const CheckAuth=require('../middleware/check-auth');
const FrameModel= require('../controllers/framemodelcontroller');

router.route("/")
    .get((CheckAuth),FrameModel.getAllFrameModel)
    .post((CheckAuth),FrameModel.addNew)

router.route("/:uuid")
    .put((CheckAuth),FrameModel.updateFrameModel)
    .delete((CheckAuth),FrameModel.deleteFrameModel)

    
router.route("/findone")
    .get((CheckAuth),FrameModel.findFrameModel)  
// router.route("/:companyId")
//     .get(FrameMaterial.getAllFrameMaterial)
module.exports = router; 