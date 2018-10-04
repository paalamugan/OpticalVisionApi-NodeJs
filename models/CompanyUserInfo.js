module.exports =(sequelize,Datatypes)=>{
    const CompanyInfo = sequelize.define('companyuserinfo',{
        companyname :{
           type :Datatypes.STRING,
            allowNull: false
        },
        firstname :{
            type :Datatypes.STRING,
             allowNull: false
         },
         lastname :{
            type :Datatypes.STRING,
             //allowNull: false
         },
        mobilenumber:{
            type:Datatypes.BIGINT,
            allowNull: false   
        },
        email:{
            type:Datatypes.STRING
        },
        Address:{
            type:Datatypes.TEXT
        },
        TIN:{
            type:Datatypes.INTEGER
        },
        password:{
            type:Datatypes.STRING
        }
      
    });
    return CompanyInfo;
}