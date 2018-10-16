module.exports =(sequelize,Datatypes)=>{
    const CompanyInfo = sequelize.define('companyuserinfo',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
          customid:{
            type :Datatypes.INTEGER,
           //autoIncrement: true,
          },
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
        },
        userImage:{
            type:Datatypes.STRING
        }
      
    });
    return CompanyInfo;
}