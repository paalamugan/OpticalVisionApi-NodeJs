module.exports =(sequelize,Datatypes)=>{
    const InvoiceOrder = sequelize.define('invoicedetail',{
        invoiceNo:{
            type:Datatypes.STRING,
            allowNull:false
        },
        invoiceDate:{
            type:Datatypes.DATE,
            allowNull :false
        },
        salesman:{
            type:Datatypes.STRING,
            allowNull:false
        },
    });
    return InvoiceOrder;
}