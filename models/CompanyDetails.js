module.exports =(sequelize,Datatypes)=>{
    const CompanyDetail = sequelize.define('companydetail',{
        companyname:{
            type:Datatypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        owneremail:{
            type:Datatypes.STRING,
            allowNull:false
        },
        ownermobilenumber:{
            type:Datatypes.BIGINT,
            allowNull:false
        },
        loginname:{
            type:Datatypes.STRING,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false
        },
        lastmodifiedpassword:{
            type:Datatypes.DATE
        }
    },
    {
        paranoid: true,
        underscored: true
      });
    return CompanyDetail;
}