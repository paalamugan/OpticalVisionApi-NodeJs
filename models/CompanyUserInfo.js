module.exports =(sequelize,Datatypes)=>{
    const CompanyInfo = sequelize.define('companyuserinfo',{
        companyname :{
           type :Datatypes.STRING,
            allowNull: false
        },
        username :{
            type :Datatypes.STRING,
             allowNull: false
         },
        phonenumber:{
            type:Datatypes.BIGINT,
            allowNull: false   
        },
        email:{
            type:Datatypes.STRING
        },
        address:{
            type:Datatypes.TEXT
        },
        tin:{
            type:Datatypes.STRING,
            allowNull: true
        },
        password:{
            type:Datatypes.STRING
        }
      
    });
    return CompanyInfo;
}