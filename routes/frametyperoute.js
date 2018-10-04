const router = require('express-promise-router')();

const FrameType= require('../controllers/frametypecontroller');
//const db = require("../config/dbconfig");
router.route("/")
    .post(FrameType.addNew)

router.route("/:frametypeId")
    .put(FrameType.updateFrameType)
    .delete(FrameType.deleteFrameType)
    
router.route("/:companyId")
    .get(FrameType.getAllFrameType)


   module.exports = router; 