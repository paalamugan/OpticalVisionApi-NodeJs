const db = require('../config/dbconfig');
const Customer = db.customer;
// var request = require('request');


/*exports.deleteCustomer = async(req,res)=>{
    console.log("deleted customer method")
        Customer.destroy({
        where:{name:req.params.name}
    }).then(deletedcustomer=>{
        res.json(deletedcustomer+"deleted");
    })
}*/
exports.updateCustomer = async(req,res)=>{
    Customer.findOne({
        where:{name:req.params.name,companyuserinfoId:req.params.companyId}
    }).then(updateCustomer=>{
        updateCustomer.update({
            mobilenumber:req.body.mobilenumber,
            location:req.body.location,
        })
        res.json("updateCustomer::"+updateCustomer);
    })

}
//find all customer
exports.getCustomer = async(req,res) =>{
    console.log("req in getcustomer::",req.params)
       await Customer.findOne({
           where :{name:req.params.name,companyuserinfoId:req.params.companyId}
        }).then(customer=>{
              res.send(customer); 
       });

}
//Delete customer


exports.findAllByCompany = async(req,res,next)=>{
    await Customer.findAndCountAll({
        where:{companyuserinfoId:req.params.companyId}
    }).then(customerlist=>{
        res.send(customerlist);
    })
}
/* exports.newCustomer = async(req,res,next)=>{
    await Customer.create({...req.body}).then(customerdetail=>{
        res.send("customerdetailsss:"+customerdetail);
    })
 }*/

 