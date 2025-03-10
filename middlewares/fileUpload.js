const path = require('path');
const multer = require("multer");
const {v4 : uuidv4} = require("uuid");

const filePath = path.join(__dirname, "../uploaded-files")

const storage = multer.diskStorage({
    destination: filePath,
    filename: (req, file, cb) =>{
        let extensionName = path.extname(file.originalname);// gives the extemsion naem
        const fileName = uuidv4() + extensionName;
        cb(null , fileName)
    }
});

const upload = multer({ // This is middleware initialization
    storage: storage
})


module.exports = upload;



