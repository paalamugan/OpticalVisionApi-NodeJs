const db = require('../config/dbconfig');
const FrameMaterial = db.framematerial;

exports.addNew = async(req,res,next) =>{
   await FrameMaterial.findOrCreate({
            where :{name:req.body.name,
                    fk_companyid:req.userData.companyId
            },
            defaults: {name:req.body.name,model:req.body.model,size:req.body.size,quantity:req.body.quantity,retailerPrice: req.body.retailerPrice,wholesalerPrice:req.body.wholesalerPrice,fk_companyid:req.userData.companyId}
        }).spread((material,created) =>{
            if(created){
                res.status(200).send(material);
            }else{
                res.status(300).send({error:"Already Same Frame Material has created.",data:req.body});
            }
            // console.log(material.get({
            //     plain:true
            // }))
        }).catch((err)=>{
           return res.status(401).send("UnAuthorized Request");
        });
}

exports.getAllFrameMaterial = async(req,res) =>{
    await FrameMaterial.findAndCountAll({
        where :{fk_companyid : req.userData.companyId}
    }).then(displayAllList=>{
        // console.log(displayAllList);
       return res.status(200).send(displayAllList.rows);
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    });
}

exports.deleteFrameMaterial = async(req,res)=>{
    const Id = req.params.framematerialId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateFrameMaterial = async(req,res,next)=>{
    const Id = req.params.framematerialId;
   await FrameMaterial.update({
            name: req.body.name,
            model:  req.body.model,
            size:  req.body.size,
            quantity:  req.body.quantity,
            retailerPrice: req.body.retailerPrice,
            wholesalerPrice: req.body.wholesalerPrice,
    },{
        where :{uuid :Id,fk_companyid:req.body.fk_companyid}
    }).then(updatedFrameMat=>{
        return res.send(updatedFrameMat);
        // if(updatedFrameMat==0){
        //     return res.status(300).send("There is no framtype matching with companyid")
        // }else{
        //     return res.status(200).send("Updated the Product Sucessfully"+Id);
        // }
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    })
}