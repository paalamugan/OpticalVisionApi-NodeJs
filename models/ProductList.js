module.exports =(sequelize,Datatypes)=>{
    const ProductList = sequelize.define('productlist',{
        producttype:{
            type:Datatypes.STRING,
            allowNull:false,
            //primaryKey:true
        },
        productmodel:{
            type:Datatypes.STRING
        },
        price:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    });
    return ProductList;
}