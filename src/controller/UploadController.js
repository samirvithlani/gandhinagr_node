const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const checkFileType = (file,cb)=>{
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if(extname && mimetype){
        return cb(null,true);
    }
    else{
        cb("Error: Images only");
    }
}
const upload = multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb);
    }
}).single('myImage');
//many
//any
//none
//array

const uploadFile = (req,res)=>{


        upload(req,res,(err)=>{
            if(err){
                res.json({
                    message:"Error while uploading file"
                })
            }
            else{
                //db [ath store...]
                res.json({
                    message:"File uploaded successfully",
                    file:req.file
                })
            }
        })


}
module.exports = {
    uploadFile
}


