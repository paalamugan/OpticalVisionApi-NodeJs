module.exports =(sequelize,Datatypes)=>{
    const ProdItem = sequelize.define('productitem',{
        quantity:{
            type:Datatypes.INTEGER,
            allowNull:false
        },
        price:{
            type:Datatypes.INTEGER
        }
    });
    return ProdItem;
}