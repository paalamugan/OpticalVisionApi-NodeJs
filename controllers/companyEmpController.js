const db=require('../config/dbconfig');
const EmpInfo = db.companyEmpInfo;
const EmpSignInInfo = db.employeeSingnInInfo;
const Company = db.companyuserinfo;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


exports.addNewEmployee = async(req,res,next)=>{
    let empIdCnt;
    let compName;
    await Company.findById(req.params.companyId).then(companyname=>{
        compName = companyname.companyname
     });
     console.log("compname:"+JSON.stringify(compName));
    await EmpInfo.findAndCountAll({
        where:{companyuserinfoId : req.params.companyId}
    }).then(totEmpCount=>{
        console.log(JSON.stringify(totEmpCount))
        empIdCnt = totEmpCount.count+1
    });
    console.log("Employee Count valu::"+empIdCnt);
    const empExists = EmpInfo.findOne({
        where :{
            empname : req.body.empname,
            email : req.body.email,
            companyuserinfoId:req.params.companyId
        }     
    }).then(registeremp=>{
        if(registeremp !=null){
            res.send("Already This Employee name registered "+registeremp.empname)
        }else{
            EmpInfo.create({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                employeeId :compName+'-'+empIdCnt,
                mobilenumber:req.body.mobilenumber,
                empname : req.body.empname,
                email : req.body.email,
                Address:req.body.Address,
                DOB:req.body.DOB,
                DOJ:req.body.DOJ,
                adminaccess:req.body.adminaccess,
                companyuserinfoId:req.body.companyuserinfoId
            }).then(empregistered=>{
                console.log("after empregistertion--")
                EmpSignInInfo.create({
                    username : empregistered.email,
                    password : "testpassword",
                    adminaccess : empregistered.adminaccess,
                    employeeId : empregistered.employeeId,
                    companyuserinfoId:empregistered.companyuserinfoId
                }).then(()=>{
                    res.send("Register your Employee.Login with "+empregistered.email +"and password");
                })
            }) 
        }
    });
};

exports.getEmpDetails = async(req,res,next)=>{
    EmpInfo.findOne({
        where :{
            [Op.or]:[{empname : req.body.empname},{email : req.body.email}]
        }
    }).then(empinfo=>{
        res.send(empinfo);
    })
}
exports.updateEmpDetails = async(req,res,next)=>{
    console.log("inside update EmpDetail --")
           await EmpInfo.update({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                empname : req.body.empname,
                email : req.body.email,
                Address:req.body.Address,
                DOB:req.body.DOB,
                DOJ:req.body.DOJ,
                adminaccess:req.body.adminaccess
            },{
                where :{[Op.and]:[{employeeId:req.body.employeeId},{companyuserinfoId:req.body.companyuserinfoId}]}
            }).then(()=>{
                return EmpInfo.findOne({
                    where:{[Op.and]:[{employeeId:req.body.employeeId},{companyuserinfoId:req.body.companyuserinfoId}]}
                }).then(updatedEmployee =>{
                    EmpSignInInfo.update({
                        username : updatedEmployee.email,
                        password : "testpassword",
                        adminaccess : updatedEmployee.adminaccess,
                    },{
                        where:{employeeId:updatedEmployee.employeeId}
                    }).then(()=>{
                        res.send("Register your Employee.Login with "+updatedEmployee.email +"and password");
                    })
                })
               
                if(empupdated ==null){
                    res.send("There is no employee name in this name : "+registeremp.empname)
                }else{
                   

                }
            }).catch(err=>{
                console.log("Error in employee update ::"+err)
            })
    }

    exports.getAllEmpDetails = async(req,res)=>{
        EmpInfo.findAndCountAll({
            where:{companyuserinfoId :req.params.companyId}
         }).then(result=>{
             res.send(result);
         })
    }


