const router = require('express-promise-router')();

const FrameMaterial= require('../controllers/framematerialcontroller');
//const db = require("../config/dbconfig");
router.route("/")
    .post(FrameMaterial.addNew)

router.route("/:framematerialId")
    .put(FrameMaterial.updateFrameMaterial)
    .delete(FrameMaterial.deleteFrameMaterial)
    
router.route("/:companyId")
    .get(FrameMaterial.getAllFrameMaterial)


   module.exports = router; 