const multer = require("multer");
const path = require("path");

const getExtName = function (fileName) {
    if (!fileName) return fileName;

    const split = fileName.split('.');
    const extname = split[split.length - 1];
    
    return extname;
}

//set Storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now() + '-' + Math.round(Math.random() * 1E9)}.png`;
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});

//Init Upload
const uploadAvatar = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB
    fileFilter: (req, file, cb) => {
        const extname = getExtName(file.originalname);
        cb(null, /jpeg|jpg|png|svg/.test(extname));
    },
}).single("avatar");

module.exports = uploadAvatar;
