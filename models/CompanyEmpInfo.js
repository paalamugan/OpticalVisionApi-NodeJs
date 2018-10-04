module.exports =(sequelize,Datatypes)=>{
    const CompanyEmpInfo = sequelize.define('companyempinfo',{
        firstname:{
            type:Datatypes.STRING,
            allowNull:false
        },
        lastname:{
            type:Datatypes.STRING,
           // allowNull:false
        },
        employeeId:{
            type:Datatypes.STRING,
            primaryKey:true,
           // autoIncrement: true,
            allowNull:false
        },
        empname:{
            type:Datatypes.STRING,
            allowNull:false
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
        DOB:{
            type:Datatypes.DATE,
            allowNull:false
        },
        DOJ:{
            type:Datatypes.DATE,
            allowNull:false
        },
        adminacces:{
            type:Datatypes.ENUM,
            values:['yes','no']
        }
    });
    return CompanyEmpInfo;
}