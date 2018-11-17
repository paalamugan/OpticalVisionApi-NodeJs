const db = require('../config/dbconfig');
const LensType = db.lenstype;
exports.addNew = async(req,res,next) =>{
   await LensType.findOrCreate({
            where :{powerlenstype:req.body.powerlenstype,
                    name:req.body.name,
                    lensmaterial:req.body.lensmaterial,
                    fk_companyid:req.userData.companyId
            },
            defaults: {powerlenstype:req.body.powerlenstype,name:req.body.name,lensmaterial:req.body.lensmaterial,quantity:req.body.quantity,retailerPrice: req.body.retailerPrice,wholesalerPrice:req.body.wholesalerPrice,fk_companyid:req.userData.companyId}
        }).spread((lenstype,created) =>{
            if(created){
                res.status(200).send(lenstype);
            }else{
                res.status(300).send({error:"Already Same Lens Type has created.",data:req.body});
            }
            // console.log(material.get({
            //     plain:true
            // }))
        }).catch((err)=>{
           return res.status(401).send("UnAuthorized Request");
        });
}

exports.getAllLensType = async(req,res) =>{
    await LensType.findAndCountAll({
        where :{fk_companyid : req.userData.companyId},
    }).then(displayAllList=>{
        // console.log(displayAllList);
       return res.status(200).send(displayAllList.rows);
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    });
}

exports.deleteLensType = async(req,res)=>{
    const Id = req.params.framematerialId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateLensType = async(req,res,next)=>{
    const Id = req.params.uuid;
   await LensType.update({
            powerlenstype: req.body.powerlenstype,
            name:  req.body.name,
            lensmaterial:req.body.lensmaterial,
            quantity:  req.body.quantity,
            retailerPrice: req.body.retailerPrice,
            wholesalerPrice: req.body.wholesalerPrice,
    },{
        where :{uuid :Id,fk_companyid:req.body.fk_companyid}
    }).then(updated=>{
        return res.send(updated);
        // if(updatedFrameMat==0){
        //     return res.status(300).send("There is no framtype matching with companyid")
        // }else{
        //     return res.status(200).send("Updated the Product Sucessfully"+Id);
        // }
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    })
   
}
exports.findLensType= async(req,res,next)=>{
     LensType.findOne({
        where:{powerlenstype:req.query.powerlenstype,name:req.query.name,fk_companyid:req.userData.companyId},
    }).then(data=>{
        res.send(data);
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    })
}