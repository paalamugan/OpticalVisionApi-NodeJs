module.exports =(sequelize,Datatypes)=>{
    const CompanyEmpInfo = sequelize.define('companyempinfo',{
        employeeId:{
            type:Datatypes.STRING,
            primaryKey:true,
           // autoIncrement: true,
            allowNull:false
        },
       
        employeeName:{
            type:Datatypes.STRING,
            allowNull:false
        },
        mobileNumber:{
            type:Datatypes.BIGINT,
            allowNull: false   
        },
        employeeEmail:{
            type:Datatypes.STRING
        },
        employeePassword:{
            type:Datatypes.STRING
        },
        address:{
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
        adminAccess:{
            type:Datatypes.ENUM,
            values:['yes','no']
        }
    });
    return CompanyEmpInfo;
}