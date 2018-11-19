module.exports =(sequelize,Datatypes)=>{
    const SignInInfo = sequelize.define('signininfo',{
        username:{
            type:Datatypes.STRING,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false
        }
    },
    {
        paranoid: true,
        underscored: true
      }
    );
    return SignInInfo;
}