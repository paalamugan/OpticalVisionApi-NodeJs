const db = require('../config/dbconfig');
const FrameModel = db.framemodel;
const Brand = db.brand;
exports.addNew = async(req,res,next) =>{
    console.log(req.body);
   await FrameModel.findOrCreate({
            where :{brandUuid:req.body.brand.uuid,
                    model:req.body.model,
                    frametype:req.body.frametype,
                    fk_companyid:req.userData.companyId
            },
            defaults: {brandUuid:req.body.brand.uuid,model:req.body.model,frametype:req.body.frametype,size:req.body.size,quantity:req.body.quantity,retailerPrice: req.body.retailerPrice,wholesalerPrice:req.body.wholesalerPrice,fk_companyid:req.userData.companyId}
        }).spread((material,created) =>{
            if(created){
                res.status(200).send(material);
            }else{
                res.status(300).send({error:"Already Same Frame Model has created.",data:req.body});
            }
            // console.log(material.get({
            //     plain:true
            // }))
        }).catch((err)=>{
           return res.status(401).send("UnAuthorized Request");
        });
}

exports.getAllFrameMaterial = async(req,res) =>{
    await FrameModel.findAndCountAll({
        where :{fk_companyid : req.userData.companyId},
        include:[{
            model:Brand
        }]
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
    const Id = req.params.uuid;
   await FrameModel.update({
            brandUuid: req.body.brand.uuid,
            model:  req.body.model,
            frametype:req.body.frametype,
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
exports.findFrameModel= async(req,res,next)=>{
    await FrameModel.findOne({
        where:{model:req.query.model,brandUuid:req.query.brand,fk_companyid:req.userData.companyId},
        include:[{
            model:Brand
        }]
        // attributes:['model','quantity','frametype','retailerPrice','wholesalerPrice'],
    }).then(data=>{
        if(data!=null){
            res.send(data);
        }
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    })
}