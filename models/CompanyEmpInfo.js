module.exports =(sequelize,Datatypes)=>{
    const CompanyEmpInfo = sequelize.define('companyempinfo',{
        uuid: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true
          },
        employeeId:{
            type:Datatypes.STRING,
           
           // autoIncrement: true,
            allowNull:false
        },
       customid:{
        type:Datatypes.INTEGER,
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
            type:Datatypes.DATEONLY,
            allowNull:false
        },
        DOJ:{
            type:Datatypes.DATEONLY,
            allowNull:false
        },
        adminAccess:{
            type:Datatypes.ENUM,
            values:['yes','no']
        },
        userImage:{
            type:Datatypes.STRING
        }
    });
    return CompanyEmpInfo;
}