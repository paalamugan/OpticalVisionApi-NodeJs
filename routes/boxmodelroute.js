const router = require('express-promise-router')();

const BoxModel= require('../controllers/boxmodelcontroller');
//const db = require("../config/dbconfig");
router.route("/")
    .post(BoxModel.addNew)

router.route("/:boxmodelId")
    .put(BoxModel.updateBoxModel)
    .delete(BoxModel.deleteBoxModel)
    
router.route("/:companyId")
    .get(BoxModel.getAllBoxModel)


   module.exports = router; 