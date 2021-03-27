const Sequelize = require('sequelize');
const db = require('./config/dbconfig');

const Op = Sequelize.Op;

const Customer = db.customerdetails;
const CompanyUser = db.companyuserinfo;
const EyePower = db.eyedetails;
const Brand = db.brand;
const invoiceOrder = db.invoiceorder;

db.sequelize.sync({ force: false }).then(()=>{
//    Brand.findAndCountAll({}).then(result=>{
//         console.log("result value:"+result.count);
//         if(result.count == 0){
//             Brand.bulkCreate([
//                 {
//                     name :"Local",
//                     code:"Local"
//                 }
//             ])
//         }
//     }) 
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




