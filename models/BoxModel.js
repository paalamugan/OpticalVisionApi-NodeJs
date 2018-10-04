module.exports =(sequelize,Datatypes)=>{
    const BoxModel = sequelize.define('boxmodel',{
        name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        description:{
            type:Datatypes.STRING
        },
        quantity:{
            type:Datatypes.ENUM,
            values:['dozen','unit']
        },
        price:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    });
    return BoxModel;
}