module.exports =(sequelize,Datatypes)=>{
    const frameMaterial = sequelize.define('framematerial',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        model:{
            type:Datatypes.STRING,
        },
        size:{
            type:Datatypes.INTEGER,
        },
        quantity:{
            type:Datatypes.INTEGER,
        },
        retailerPrice:{
            type:Datatypes.INTEGER,
            allowNull:false
        },
        wholesalerPrice:{
            type:Datatypes.INTEGER,
        }
    });
    return frameMaterial;
}