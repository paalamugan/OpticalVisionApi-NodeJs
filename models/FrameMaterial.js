module.exports =(sequelize,Datatypes)=>{
    const frameMaterial = sequelize.define('framematerial',{
        framematerial:{
            type:Datatypes.STRING,
            allowNull:false
        },
        price:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    });
    return frameMaterial;
}