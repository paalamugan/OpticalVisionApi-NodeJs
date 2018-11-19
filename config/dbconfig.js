const env = require('./env');
const db ={};
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database,env.username,env.password,{
    host:env.host ,
    dialect:env.dialect,
    operatorAliases:false,
    define:{
        timestamps: false
      },
    pool:{
        max:env.pool.max,
        min:env.pool.min,
        idle:env.pool.idle,
        acquire:env.pool.acquire
    }
});

sequelize.authenticate().then(() =>{
    console.log("Connection established sucessfully");
})
.catch((err)=>{
    console.log("Some thing problem in database connection",err);
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Call Model data
db.companyuserinfo      = require('../models/CompanyUserInfo')(sequelize,Sequelize);
db.forgetpassword       = require('../models/ForgetPassword')(sequelize,Sequelize);
db.signInInfo           = require('../models/SignInInfo')(sequelize,Sequelize);
db.employeeSingnInInfo  = require('../models/EmpSignInInfo')(sequelize,Sequelize);
db.companyEmpInfo       = require('../models/CompanyEmpInfo')(sequelize,Sequelize);

db.productlist          = require('../models/ProductList')(sequelize,Sequelize);
db.frametype            = require('../models/FrameType')(sequelize,Sequelize);
db.framematerial        = require('../models/FrameMaterial')(sequelize,Sequelize);
db.boxmodel             = require('../models/BoxModel')(sequelize,Sequelize);
db.customer             = require('../models/Customer')(sequelize,Sequelize);
db.eyeprescriptions     = require('../models/EyePrescription')(sequelize,Sequelize);

db.salesorder            = require('../models/SalesOrder')(sequelize,Sequelize);
db.proditem              = require('../models/ProductItem')(sequelize,Sequelize);
db.invoiceDetail         = require('../models/InvoiceDetail')(sequelize,Sequelize);
db.brand                 = require('../models/brand')(sequelize,Sequelize);
db.framemodel            = require('../models/FrameModel')(sequelize,Sequelize);
db.lenstype            = require('../models/LensType')(sequelize,Sequelize);
/* Association */
db.signInInfo.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.employeeSingnInInfo.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.companyEmpInfo.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.productlist.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.frametype.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.framematerial.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.boxmodel.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.customer.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.eyeprescriptions.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.salesorder.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.proditem.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.invoiceDetail.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.forgetpassword.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.brand.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.framemodel.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.lenstype.belongsTo(db.companyuserinfo,{foreignKey: 'fk_companyid', targetKey: 'uuid',onDelete: 'CASCADE'});
db.framemodel.belongsTo(db.brand,{foreignKey: 'fk_brandid',targetKey: 'uuid',onDelete: 'CASCADE'});  
// db.employeeSingnInInfo.belongsTo(db.companyEmpInfo,{foreignKey:"employeeId"});

db.salesorder.hasMany(db.eyeprescriptions,{as:'SalesOrderID'});
db.salesorder.belongsTo(db.customer);

db.salesorder.belongsToMany(db.proditem, { as: 'SalesOrd', through: 'SalesOrderList', foreignKey: 'salesorderId', otherKey: 'proditemId'});
db.proditem.belongsToMany(db.salesorder, { as: 'ProdItem', through: 'SalesOrderList', foreignKey: 'proditemId', otherKey: 'salesorderId'});

db.proditem.belongsTo(db.productlist);
db.proditem.belongsTo(db.frametype);
db.proditem.belongsTo(db.framematerial);

// db.brand.hasOne(db.framemodel,{foreignKey: 'fk_brandid',sourceKey: 'uuid'});
/*Note:Need to find solution to store boxmodelid in proditem table */
db.proditem.belongsTo(db.boxmodel);
db.proditem.belongsTo(db.eyeprescriptions);

db.salesorder.hasOne(db.invoiceDetail);

module.exports = db;



