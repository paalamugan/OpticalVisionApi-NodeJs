const multer = require('multer');
const path = require('path');
//set Storage engine
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/admin');
    },
    filename:function(req,file,cb){
        // cb(null,file.fieldname+'-'+Date.now()+
        // path.extname(file.originalname));
        cb(null,Date.now()+'-'+file.originalname);
    }
});
//Init Upload
const upload = multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter: (req,file,cb)=>{
        checkFileType(file,cb);
    }
}).single('userImage');
//check the file format
function checkFileType(file,cb){
//allow ext
const filetypes = /jpeg|jpg|png|gif/;
//check ext
const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//check mime
const mimetype = filetypes.test(file.mimetype);

if(mimetype && extname){
    return cb(null,true);
}else{
    cb('Error:Images Only!');
}
}
module.exports = (req,res,next)=>{
    upload(req,res,(err)=>{
        if(err){
        return res.status(401).send('Error:Images Only!');
        }else{
            if(req.file == undefined || req.file == null ){
                if( req.body.userImage==''){
                    var Imagepath='/uploads/noavatar.png';
                    console.log(Imagepath);
                    req.body.userImage=Imagepath;
                    next();
                }else{
                    next();
                }
               
                //return res.status(401).send({msg:'No File Selected!'});
            }
            else{
               req.body.userImage=req.file.path;
                next();
         }
            
           
        }
       
    })

}