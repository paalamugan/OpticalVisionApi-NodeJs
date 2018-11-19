const db = require('../config/dbconfig');
const Brand = db.brand;
const FrameModel=db.framemodel;

exports.addNew = async(req,res,next) =>{
   await Brand.findOrCreate({
            where :{name:req.body.name,
                    fk_companyid:req.userData.companyId
            },
            defaults: {name:req.body.name,code:req.body.code,fk_companyid:req.userData.companyId}
        }).spread((material,created) =>{
            if(created){
                res.status(200).send(material);
            }else{
                res.status(300).send({error:"Already Same Brand has created.",data:req.body});
            }
            // console.log(material.get({
            //     plain:true
            // }))
        }).catch((err)=>{
           return res.status(401).send("UnAuthorized Request");
        });
}

exports.getAllBrand = async(req,res) =>{
    await Brand.findAndCountAll({
        where :{fk_companyid : req.userData.companyId}
    }).then(displayAllList=>{
       return res.status(200).send(displayAllList.rows);
    }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
    });
}

exports.deleteBrand = async(req,res)=>{
    await Brand.destroy({
        where: { uuid: req.params.uuid }
      }).then(() => {
        return  res.send({success:true});
      }).catch(err=>{
        return res.status(401).send("UnAuthorized Request");
      });
    // console.log(Id);
    // return Brand
    // .findById(Id)
    // .then(brand => {
    //   if (!brand) {
    //     return res.status(400).send({
    //       message: 'Brand Not Found',
    //     });
    //   }
       
    //     return FrameModel
    //         .destroy({where:{brand_uuid:Id}})
    //          .then(() =>{
    //            return brand
    //                 .destroy()
    //                 .then((deleteed) => res.status(200).send(deleteed))
    //                 .catch(error => res.status(400).send(error));
    //          })
    //          .catch(error => res.status(400).send(error));
    //   })
  
    // .catch(error => res.status(400).send(error));
    //console.log("Producttype value:"+prodtype)
//   await Brand.destroy({
//         where:{uuid :Id}
//     }).then((brand)=>{
//         console.log(brand);
//        return res.sendStatus(200).send(brand);
//     })
}

exports.updateBrand= async(req,res,next)=>{
    const Id = req.params.uuid;
   await Brand.update({
            name: req.body.name,
            code:  req.body.code,
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