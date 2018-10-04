module.exports = (sequelize,Datatypes)=>{
    const Eyepresc = sequelize.define('eyeprescription',{
        personname:{
            type:Datatypes.STRING,
            allownull:false
        },
        eyedefectIn:{
            type    :Datatypes.ENUM,
            values  :['left','right']
        },
        eyesiteAt:{
            type    :Datatypes.ENUM,
            values  :['distance','near'] 
        },
        sph:{
            type:Datatypes.INTEGER
        },
        axis:{
            type:Datatypes.INTEGER
        },
        prism:{
            type:Datatypes.INTEGER
        }
    });
    return Eyepresc;
}