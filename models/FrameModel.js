module.exports =(sequelize,Datatypes)=>{
    const FrameModel = sequelize.define('framemodel',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        frametype:{
            type:Datatypes.ENUM,
            values:['HALF RIM','FULL RIM','RIM LESS'],
            allowNull:false
            },
        model:{
            type:Datatypes.STRING,
            allowNull:false
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
    },{
        paranoid: true,
        underscored: true
      }
    );
    return FrameModel;
}