module.exports =(sequelize,Datatypes)=>{
    const SignInInfo = sequelize.define('signininfo',{
        username:{
            type:Datatypes.STRING,
            primaryKey: true,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false
        }
    });
    return SignInInfo;
}