const router = require('express-promise-router')();
const CheckAuth=require('../middleware/check-auth');
const BoxModel= require('../controllers/boxmodelcontroller');
//const db = require("../config/dbconfig");
router.route("/")
    .post((CheckAuth),BoxModel.addNew)
    .get((CheckAuth),BoxModel.getAllBoxModel)

router.route("/:uuid")
    .put((CheckAuth),BoxModel.updateBoxModel)
    .delete((CheckAuth),BoxModel.deleteBoxModel)
    
    


   module.exports = router; 