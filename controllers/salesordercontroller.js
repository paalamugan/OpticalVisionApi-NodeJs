const db = require("../config/dbconfig");
const waitFor = (ms) => new Promise(r => setTimeout(r, ms))
const sequelize = require('sequelize');

const SalesOrder = db.salesorder;
const Customer = db.customer;
const ProductItem = db.proditem;
const Eyepower = db.eyeprescriptions;
const ProdList = db.productlist;
const FrameType = db.frametype; 


async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }

exports.getAllSalesOrder = async(req,res,next)=>{
    SalesOrder.findAndCountAll({
      where:{companyuserinfoId :req.params.companyId},
        attributes:['totalprice','balance'],
        include: [{
            model:ProductItem, as: 'SalesOrd',
            //attributes: ['productlistId'],
            include:[
                {
                    model:ProdList
                },{
                    model:FrameType
                }
            ],
            through: {
                attributes: ['salesorderId', 'proditemId'],
            }
          }]
    }).then(salesord=>{
        res.send(salesord);
    })
}

exports.getAllSalesByYear = async(req,res)=>{
    SalesOrder.findAndCountAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('orderdate')), req.params.year)
       }).then(yearresult =>{
           //console.log("yearresult ::"+yearresult)
           res.send(yearresult)
       })
}
exports.getAllSalesByMonth = async(req,res)=>{
    SalesOrder.findAndCountAll({
        where: sequelize.where(sequelize.fn('MONTH', sequelize.col('orderdate')), req.params.month)
       }).then(monthsalesord =>{
           //console.log("yearresult ::"+yearresult)
           res.send(monthsalesord)
       })
}

exports.newSalesOrder = async(req,res)=>{
    let custId ;
    await Customer.findOrCreate({
        where :{mobilenumber:req.body.customer.mobilenumber,
                companyuserinfoId:req.body.companyuserinfoId
        },
        defaults: {name: req.body.customer.name,mobilenumber:req.body.customer.mobilenumber,
                     location:req.body.customer.quantity, companyuserinfoId:req.body.companyuserinfoId}
    }).spread((customer,created) =>{
        console.log("created value ::"+created);
        if(created){   
            console.log("customer ::"+customer)
            res.send(customer);
        }else{
            console.log("Already Same Customer Exist: "+customer)
            res.send("Already Same Customer Exist:")
        }
        custId = customer.get("id")
    });

        const productItemList = req.body.productitem;
        let listitem = [];
            await asyncForEach(productItemList,async(item)=>{
                await waitFor(100)
                var EyePresc = item.eyeprescription;
            let EyePrecriptionId;
            if(EyePresc){
                  await Eyepower.create({
                    personname :EyePresc.personname,
                    eyedefectIn:EyePresc.eyedefectIn,
                    eyesiteAt : EyePresc.eyesiteAt,
                    sph : EyePresc.sph,
                    axis:EyePresc.axis,
                    prism:EyePresc.prism,
                    companyuserinfoId:req.body.companyuserinfoId
                }).then(eyepower=>{
                    EyePrecriptionId = eyepower.id
                    //console.log("EyePower value :"+eyepower);
                });
            }else{
                EyePrecriptionId=null;
            }
            await ProductItem.build({
                productlistId:item.productlist.id,
                frametypeId:item.frametype.id,
                framematerialId:item.framematerial.id,
                boxmodelId:1,
                quantity:300,
                price:55,
                eyeprescriptionId :EyePrecriptionId,
                companyuserinfoId :req.body.companyuserinfoId
                //eyeprescriptionId:item.framematerial.id,
            }).save()
           .then(proditem=>{
              listitem.push(proditem);      
            }) 
            console.log("inside  for llop::"+JSON.stringify(listitem))
        });
        //console.log("outside listitem for llop::"+listitem)
            
       
         //SalesOrder Creation
         var discountVal = req.body.discount ? req.body.discount :0;
         var advanceAmount = req.body.advanceAmt ? req.body.advanceAmt :0;
         var totPrice = req.body.totalprice
         var balance = advanceAmount > 0 ? totPrice - advanceAmount : totPrice ; 
        SalesOrder.create({
            totalprice:totPrice,
            balance:balance,
            companyuserinfoId:req.body.companyuserinfoId,
            discount :discountVal,
            advanceAmt :advanceAmount,
            orderdate : req.body.orderdate,
            deliverydate : req.body.deliverydate,
            customerId: custId 
        }).then(salesOrd=>{
            console.log("outsidelistitem for llop::"+listitem)
            salesOrd.setSalesOrd(listitem)
        })
}