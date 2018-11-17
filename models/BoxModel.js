module.exports =(sequelize,Datatypes)=>{
    const BoxModel = sequelize.define('boxmodel',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        box_model:{
            type:Datatypes.STRING
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
    return BoxModel;
}