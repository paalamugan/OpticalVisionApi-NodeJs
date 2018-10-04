const db = require('../config/dbconfig');
const ProductList = db.productlist;

exports.addNewProduct = async(req,res) =>{
        ProductList.findOrCreate({
            where :{producttype:req.body.producttype,
                    companyuserinfoId:req.body.companyuserinfoId
            },
            defaults: {price: req.body.price,productmodel:req.body.productmodel}
        }).spread((user,created) =>{
            console.log("created value ::"+created);
            if(created){
                res.send(user);
            }else{
                res.send("Already Same Product Type has created.")
            }
            console.log(user.get({
                plain:true
            }))
        });
}

exports.getAllProductList = async(req,res) =>{
    ProductList.findAndCountAll({}).then(displayAllProduct=>{
        res.send(displayAllProduct);
    });
}

exports.deleteProduct = async(req,res)=>{
    const prodId = req.params.productId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateProduct = async(req,res)=>{
    const prodId = req.params.productId;
    ProductList.update({
        producttype : req.body.producttype,
        productmodel : req.body.productmodel,
        price : req.body.price
    },{
        where :{id :prodId,companyuserinfoId:req.body.companyuserinfoId}
    }).then(()=>{
        res.status(200).send("Updated the Product Sucessfully"+prodId);
    })
}