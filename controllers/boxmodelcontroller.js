const db = require('../config/dbconfig');
const BoxModel = db.boxmodel;

exports.addNew = async(req,res) =>{
    BoxModel.findOrCreate({
            where :{name:req.body.name,
                    companyuserinfoId:req.body.companyuserinfoId
            },
            defaults: {name: req.body.name,description:req.body.description,
                         quantity:req.body.quantity,price:req.body.price }
        }).spread((box,created) =>{
            console.log("created value ::"+created);
            if(created){
                res.send(box);
            }else{
                res.send("Already Same Box Model has created.")
            }
            console.log(box.get({
                plain:true
            }))
        });
}

exports.getAllBoxModel = async(req,res) =>{
    BoxModel.findAndCountAll({
        where :{companyuserinfoId : req.params.companyId}
    }).then(displayAllList=>{
        res.send(displayAllList);
    });
}

exports.deleteBoxModel = async(req,res)=>{
    const Id = req.params.boxmodelId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateBoxModel = async(req,res)=>{
    const Id = req.params.boxmodelId;
    BoxModel.update({
        name : req.body.name,
        description:req.body.description,
        qunatity:req.body.quantity,
        price : req.body.price
    },{
        where :{id :Id,companyuserinfoId:req.body.companyuserinfoId}
    }).then(updatedBoxModel=>{
        if(updatedBoxModel ==0){
            res.send("There is no framtype matching with companyid")
        }else{
            res.status(200).send("Updated the Product Sucessfully"+Id);
        }
        console.log("updateFrame:"+updatedBoxModel)
        
    })
}