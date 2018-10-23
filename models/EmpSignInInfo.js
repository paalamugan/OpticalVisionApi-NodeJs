module.exports =(sequelize,Datatypes)=>{
    const EmpSignInInfo = sequelize.define('empsignininfo',{
        email:{
            type:Datatypes.STRING,
            primaryKey: true,
            allowNull:false
        },
        password:{
            type:Datatypes.STRING,
            allowNull:false
        },
        employeeId:{
            type:Datatypes.STRING,
           
           // autoIncrement: true,
            allowNull:false
        },
        adminaccess:{
            type:Datatypes.ENUM,
            values:['Yes','No']
        }
    });
    return EmpSignInInfo;
}