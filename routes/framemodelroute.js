const router = require('express-promise-router')();
const CheckAuth=require('../middleware/check-auth');
const FrameModel= require('../controllers/framemodelcontroller');

router.route("/")
    .get((CheckAuth),FrameModel.getAllFrameMaterial)
    .post((CheckAuth),FrameModel.addNew)

router.route("/:uuid")
    .put((CheckAuth),FrameModel.updateFrameMaterial)
    .delete((CheckAuth),FrameModel.deleteFrameMaterial)

    
router.route("/find")
    .get((CheckAuth),FrameModel.findFrameModel)  
// router.route("/:companyId")
//     .get(FrameMaterial.getAllFrameMaterial)
module.exports = router; 