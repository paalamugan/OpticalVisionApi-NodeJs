const router = require('express-promise-router')();

const ProductList = require('../controllers/productlistcontroller');
//const db = require("../config/dbconfig");
router.route("/")
    .post(ProductList.addNewProduct)
    .get(ProductList.getAllProductList)

router.route("/:productId")
    .put(ProductList.updateProduct)
    .delete(ProductList.deleteProduct)    

   module.exports = router; 