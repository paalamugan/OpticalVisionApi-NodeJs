module.exports =(sequelize,Datatypes)=>{
    const Brand = sequelize.define('brand',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        code:{
            type:Datatypes.STRING
        }
    },{
        paranoid: true,
        underscored: true
      });
    return Brand;
}