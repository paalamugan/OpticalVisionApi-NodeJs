module.exports =(sequelize,Datatypes)=>{
    const CustInfo = sequelize.define('customer',{
        name :{
           type :Datatypes.STRING,
            allowNull: false
        },
        mobilenumber :{
            type :Datatypes.STRING,
             allowNull: false
         },
         location:{
             type:Datatypes.STRING
         }
        
    });
    return CustInfo;
}