const db=require('../config/dbconfig');
const CompanyUser = db.companyuserinfo;
const SignInInfo = db.signInInfo;

exports.registerCompany = async(req,res,next)=>{
   // console.log("company name ::"+req.body.companyname)
    const companyExists = CompanyUser.findOne({
        where :{companyname : req.body.companyname}
    }).then(companychk=>{
        if(companychk !=null){
            res.send("Already company name "+req.body.companyname+ "is registered. Please signup with new");
        }else{
           CompanyUser.create({
                companyname : req.body.companyname,
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                mobilenumber : req.body.mobilenumber,
                email : req.body.email,
                Address:req.body.Address,
                TIN:req.body.TIN,
                password:req.body.password
            }).then(registeredcompany=>{
                SignInInfo.create({
                    companyuserinfoId:registeredcompany.id,
                    username:registeredcompany.email,
                    password:registeredcompany.password
                }).then(()=>{
                    res.send("Register your company.Login with "+registeredcompany.email +"and password");
                })
                console.log("newcompany id ::"+registeredcompany.id);
            })
            
           
            
            /*.then(()=>{
                res.status("200").send("Company resgistered");
            })*/
        }
      //  console.log("Company regisejhgjhr new ::"+JSON.stringify(companychk))
    })
};

exports.getDetails = async(req,res,next)=>{
    CompanyUser.findOne({
       where:{companyname :req.params.companyname}
    }).then(companydetail=>{
        if(null !=companydetail){
            res.send(companydetail);
        }else{
            res.send("No company register with the name :"+req.params.companyname)
        }
        console.log("companydetail"+companydetail);
    }).catch(err=>{
        console.log(err);
    })
}
exports.updateDetails = async(req,res,next)=>{
    CompanyUser.findOne({
        where:{companyname :req.params.companyname}
     }).then(companydetail=>{
         if(companydetail !=null){
        CompanyUser.update({
            where:{companyname :req.params.companyname},
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            mobilenumber : req.body.mobilenumber,
            email : req.body.email,
            Address:req.body.Address,
            TIN:req.body.TIN,
            password:req.body.password
        },
        {
            where:{companyname:req.params.companyname}
        }).then(()=>{
            res.send("Details has been updated sucesafully ::"+req.params.companyname);
        })
    }else{
        res.send("No record avaiable for :"+req.params.companyname)
    }
     })
}