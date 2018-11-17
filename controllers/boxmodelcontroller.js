const db = require('../config/dbconfig');
const BoxModel = db.boxmodel;

exports.addNew = async(req,res) =>{
    BoxModel.findOrCreate({
            where :{name:req.body.name,
                box_model:req.body.box_model,
                fk_companyid:req.userData.companyId
            },
            defaults: {name: req.body.name,box_model:req.body.box_model,
                         quantity:req.body.quantity,retailerPrice:req.body.retailerPrice,wholesalerPrice:req.body.retailerPrice,fk_companyid:req.userData.companyId }
        }).spread((box,created) =>{
            if(created){
                res.status(200).send(box);
            }else{
                res.status(300).send({error:"Already Box Name has created.",data:req.body});
            }
            // console.log(box.get({
            //     plain:true
            // }))
        }).catch(err =>{
            return res.status(401).send("UnAuthorized Request");
        });
}

exports.getAllBoxModel = async(req,res) =>{
    BoxModel.findAndCountAll({
        where :{fk_companyid : req.userData.companyId}
    }).then(displayAllList=>{
        res.status(200).send(displayAllList.rows);
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
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
    const Id = req.params.uuid;
    BoxModel.update({
        name : req.body.name,
        box_model:req.body.box_model,
        qunatity:req.body.quantity,
        retailerPrice : req.body.retailerPrice,
        wholesalerPrice : req.body.wholesalerPrice,
    },{
        where :{uuid :Id,fk_companyid:req.body.fk_companyid}
    }).then(updatedBoxModel=>{
        return res.send(updatedBoxModel);
        // if(updatedFrameMat==0){
        //     return res.status(300).send("There is no framtype matching with companyid")
        // }else{
        //     return res.status(200).send("Updated the Product Sucessfully"+Id);
        // }
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    })
}