const db = require('./config/dbconfig');

const Customer = db.customerdetails;
const CompanyUser = db.companyuserinfo;
const EyePower = db.eyedetails;

const invoiceOrder = db.invoiceorder;


db.sequelize.sync({force:false}).then(()=>{
    
   /* Customer.findAndCountAll({}).then(result=>{
        console.log("result value:"+result.count);
        if(result.count == 0){
            Customer.bulkCreate([
                {
                    "customername" :"firstcustomer",
                    "email":"first@gmail.com"
                }
            ])
        }
    })*/ 
})
/*EyePower.sync({force:false}).then(()=>{
    EyePower.findAndCountAll({}).then(result=>{
        console.log("result value:"+result.count);
        if(result.count == 2){
            EyePower.bulkCreate([
                {
                    "distance" :"farr",
                    "axis":11,
                    "customerdetailtId" :3
                }
            ])
        }
    }) 
 })*/

 exports.module = db;




