module.exports =(sequelize,Datatypes)=>{
    const SalesOrd = sequelize.define('salesorder',{
        totalprice:{
            type:Datatypes.INTEGER,
            allowNull :false
        },
        discount:{
            type:Datatypes.FLOAT,
        },
        advanceAmt:{
            type:Datatypes.FLOAT,
           // allowNull :false
        },
        balance:{
            type:Datatypes.FLOAT,
            //allowNull :false
        }, 
        orderdate:{
            type:Datatypes.DATE,
           // allowNull :false
        },
        deliverydate:{
            type:Datatypes.DATE,
            //allowNull :false
        }
      
    });
    return SalesOrd;
}