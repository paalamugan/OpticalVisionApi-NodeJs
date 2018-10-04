const db = require('../config/dbconfig');
const FrameType = db.frametype;

exports.addNew = async(req,res) =>{
    FrameType.findOrCreate({
            where :{frametype:req.body.frametype,
                    companyuserinfoId:req.body.companyuserinfoId
            },
            defaults: {price: req.body.price,frametype:req.body.frametype}
        }).spread((type,created) =>{
            console.log("created value ::"+created);
            if(created){
                res.send(type);
            }else{
                res.send("Already Same Frame Type has created.")
            }
            console.log(type.get({
                plain:true
            }))
        });
}

exports.getAllFrameType = async(req,res) =>{
    FrameType.findAndCountAll({
        where :{companyuserinfoId : req.params.companyId}
    }).then(displayAllList=>{
        res.send(displayAllList);
    });
}

exports.deleteFrameType = async(req,res)=>{
    const prodId = req.params.frametypeId;
    //console.log("Producttype value:"+prodtype)
  /*await ProductType.destroy({
        where:{idname :prodtypeid}
    }).then(()=>{
        res.status(200).send("Deleted the Product Sucessfully"+prodtype);
    })*/
}

exports.updateFrameType = async(req,res)=>{
    const Id = req.params.frametypeId;
    FrameType.update({
        frametype : req.body.frametype,
        price : req.body.price
    },{
        where :{id :Id,companyuserinfoId:req.body.companyuserinfoId},
        returning: true,
       // plain: true
    }).then(updateRecord =>{
        console.log("updated Book::"+updateRecord)
        res.json(updatedBook)
    }); 
     
       /* if(updatedFrame ==0){
            res.send("There is no framtype matching with companyid")
        }else{
            res.status(200).send("Updated the Product Sucessfully"+Id);
        }
        console.log("updateFrame:"+updatedFrame)
        */
    //})
}