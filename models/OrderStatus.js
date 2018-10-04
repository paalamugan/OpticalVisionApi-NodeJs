module.exports =(sequelize,Datatypes)=>{
    const OrderStat = sequelize.define('orderstatus',{
        deliverydate:{
            type:Datatypes.DATE,
            allowNull:false
        },
        itemDetails:{
            type:Datatypes.JSON,
            allowNull:false
        },
        status:{
            type:Datatypes.ENUM,
            values:['pending','delivered']
        },
        balanceAmount:{
            type:Datatypes.INTEGER
        }
    });
    return OrderStat;
}