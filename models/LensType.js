module.exports =(sequelize,Datatypes)=>{
    const LensType = sequelize.define('lenstype',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
          powerlenstype:{
            type:Datatypes.ENUM,
            values:['Singular','Bifocal','Progressive','Trifocal'],
            allowNull:false
            },
            name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        lensmaterial:{
            type:Datatypes.STRING,
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
    return LensType;
}
