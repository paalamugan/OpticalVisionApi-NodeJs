module.exports =(sequelize,Datatypes)=>{
    const frameType = sequelize.define('frametype',{
        frametype:{
            type:Datatypes.ENUM,
            values:['halfrim','fullrim','rimless'],
            allowNull:false
            
        },
        price:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    });
    return frameType;
}