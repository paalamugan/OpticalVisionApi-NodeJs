module.exports = (sequelize,Datatypes) => {
    
    const options = {
        paranoid: true,
        underscored: true
    };

    const CompanyUserInfo = sequelize.define('companyuserinfo', 
        {
            uuid: {
                type: Datatypes.UUID,
                defaultValue: Datatypes.UUIDV1,
                // autoIncrement: true,
                primaryKey: true
            },

            customId: {
                type :Datatypes.INTEGER
            },

            companyName: {
                type :Datatypes.STRING,
                allowNull: false
            },

            userName: {
                type :Datatypes.STRING,
                allowNull: false
            },

            email:{
                type:Datatypes.STRING,
                allowNull: false
            },

            password:{
                type:Datatypes.STRING,
                allowNull: false
            },

            address:{
                type:Datatypes.TEXT
            },

            phoneNumber:{
                type:Datatypes.BIGINT 
            },

            tin:{
                type:Datatypes.STRING
            },

            avatar:{
                type:Datatypes.STRING
            }

        }, options);

    return CompanyUserInfo;
}