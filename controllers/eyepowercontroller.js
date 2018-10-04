const db=require('../config/dbconfig');
const Eyepower = db.eyeprescriptions;
const Customer = db.customer;


exports.findAll =async(req,res)=>{
    await Eyepower.findAll({
        include:[
            {
              model :Customer      
            }    
        ]
    }).then(eyepower=>{
        res.json(eyepower);
    })
}

exports.findEyeDetail = async(req,res)=>{
    console.log("params value ::"+req.params.customername)
    const customerId = await Customer.findAll({
        where :{name:req.params.customername}
        //$and :[{name:req.body.name},{mobilenumber :req.body.mobilenumber}]
    }).then(customer=>{
        console.log("eyedetail value ::"+customer[0].id)
        Eyepower.findAll({
            where:{customerId:customer[0].id}
        }).then(results=>{
            res.json(results);
        })
        //res.send(eyedetail);
    })
}

exports.updateEyeDetail = async(req,res)=>{
    const customerId = await Customer.findOne({
        limit:1,
        where :{name:req.params.customername}
        //$and :[{name:req.body.name},{mobilenumber :req.body.mobilenumber}]
    });
    console.log("eyepower customer id:"+customerId.id)
        await Eyepower.update({
            sph :req.body.sph,
            prism:req.body.prism
        },{
            where:{customerId:customerId.id}
        }).then(updaterecord=>{
            res.json("updated"+updaterecord);
        })

}