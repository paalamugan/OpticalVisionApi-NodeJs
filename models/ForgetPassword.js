module.exports =(sequelize,Datatypes)=>{
    const forgetPassword = sequelize.define('forgetpassword',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        tempPassword:{
            type:Datatypes.STRING,
            allowNull:false
        }
    });
    return forgetPassword;
}