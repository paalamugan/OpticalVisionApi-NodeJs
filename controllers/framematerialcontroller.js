const db = require('../config/dbconfig');
const FrameMaterial = db.framematerial;

exports.addNew = async(req,res) =>{
    FrameMaterial.findOrCreate({
            where :{framematerial:req.body.framematerial,
                    companyuserinfoId:req.body.companyuserinfoId
            },
            defaults: {price: req.body.price,framematerial:req.body.framematerial}
        }).spread((material,created) =>{
            console.log("created value ::"+created);
            if(created){
                res.send(material);
            }else{
                res.send("Already Same Frame Type has created.")
            }
            console.log(material.get({
                plain:true
            }))
        });
}

exports.getAllFrameMaterial = async(req,res) =>{
    FrameMaterial.findAndCountAll({
        where :{companyuserinfoId : req.params.companyId}
    }).then(displayAllList=>{
        res.send(displayAllList);
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

exports.updateFrameMaterial = async(req,res)=>{
    const Id = req.params.framematerialId;
    FrameMaterial.update({
        framematerial : req.body.framematerial,
        price : req.body.price
    },{
        where :{id :Id,companyuserinfoId:req.body.companyuserinfoId}
    }).then(updatedFrameMat=>{
        if(updatedFrameMat ==0){
            res.send("There is no framtype matching with companyid")
        }else{
            res.status(200).send("Updated the Product Sucessfully"+Id);
        }
        console.log("updateFrame:"+updatedFrameMat)
        
    })
}