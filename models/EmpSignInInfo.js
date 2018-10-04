module.exports =(sequelize,Datatypes)=>{
    const EmpSignInInfo = sequelize.define('empsignininfo',{
        username:{
            type:Datatypes.STRING,
            primaryKey: true,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false
        },
        adminacces:{
            type:Datatypes.ENUM,
            values:['yes','no']
        }
    });
    return EmpSignInInfo;
}