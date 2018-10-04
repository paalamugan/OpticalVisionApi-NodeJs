const express = require('express')



const app = express();
const bodyParser = require('body-parser');
//const replaceall = require('replaceall');
const db  = require('./db');

//routes
//const customer = req

//routes
const companyinfo = require("./routes/companyinforoute");
const employeeinfo = require("./routes/companyemproute");
const productList = require("./routes/productlistroute");
const frameType   = require("./routes/frametyperoute");
const frameMaterial =  require("./routes/framematerialroute");
const salesOrder     = require("./routes/salesorderroute");
const customer   = require("./routes/customerroute"); 

app.use(bodyParser.json());
app.use("/api/visionapp/company/register",companyinfo);
app.use("/api/visionapp/company",companyinfo);
app.use("/api/visionapp/company/update/",companyinfo);

app.use("/api/visionapp/new/employee",employeeinfo);
app.use("/api/visionapp/update/employee",employeeinfo);
app.use("/api/visionapp/delete/employee",employeeinfo);
app.use("/api/visionapp/listall/employee",employeeinfo);
app.use("/api/visionapp/get/employee",employeeinfo);


//Customer:
app.use("/api/visionapp/customer",customer);
app.use("/api/visionapp/customer/find",customer)
//ProductList

app.use("/api/visionapp/productlist/new",productList);
app.use("/api/visionapp/productlist/update",productList);
app.use("/api/visionapp/productlist/delete",productList);
app.use("/api/visionapp/productlist/listall",productList);

//FrameType

app.use("/api/visionapp/frametype/new",frameType);
app.use("/api/visionapp/frametype/update",frameType);
app.use("/api/visionapp/frametype/delete",frameType);
app.use("/api/visionapp/frametype/listall",frameType);

//FrameMaterial

app.use("/api/visionapp/framematerial/new",frameMaterial);
app.use("/api/visionapp/framematerial/update",frameMaterial);
app.use("/api/visionapp/framematerial/delete",frameMaterial);
app.use("/api/visionapp/framematerial/listall",frameMaterial);

//Sales Order:
app.use("/api/visionapp/salesorder/new",salesOrder);
app.use("/api/visionapp/salesorder/findall",salesOrder);
//app.use("/api/visionapp/salesorder/findallbyyear",salesOrder);
//app.use("/api/visionapp/salesorder/findallbymonth",salesOrder);



/*const customerRoute       = require("./routes/customerroute");
const eyePrecriptionRoute = require("./routes/eyeprecriptionroute");
const invoiceOrderRoute   = require("./routes/invoiceorderroute");
//const productType         = require("./routes/producttyperoute");
const productItem         = require("./routes/productitemroute");
const salesProductOrder   = require("./routes/salesproductroute");*/






//need to remove belkow
/*app.use("/api/customer/add",customerRoute);
app.use("/api/customer/getallcustomer",customerRoute);
app.use("/api/customer",customerRoute);
app.use("/api/customer/delete",customerRoute);
app.use("/api/customer/update",customerRoute);

//For Eye Prescription

app.use("/api/eyeprescription/add",eyePrecriptionRoute);
app.use("/api/eyeprescription/update",eyePrecriptionRoute);
app.use("/api/eyeprescription/displayall",eyePrecriptionRoute);
app.use("/api/eyeprescription/display",eyePrecriptionRoute);

//For invoice Order

app.use("/api/invoiceorder/findAll",invoiceOrderRoute);
app.use("/api/invoiceorder/addnewinvoice",invoiceOrderRoute)

// For Product Type 

/*app.use("/api/product/addnew",productType);
app.use("/api/product/findAll",productType);
app.use("/api/product/delete",productType);
app.use("/api/product/update",productType);*/

/*
const customer = require('./routes/customerroute');
const eyepowerroute = require('./routes/eyepowerroute');
app.use(bodyParser.json());

//
app.use('/api/customer/add', customerroutes);
app.use('/api/customer/getall', customerroutes);

app.use('/api/eyepower/register', eyepowerroute);
app.use('/api/get/eyepowers', eyepowerroute);
*/


const port = 9000;
app.listen(port,()=>{
        console.log('Server running in port number 9000')
});


