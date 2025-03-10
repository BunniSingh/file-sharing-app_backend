const FileModol = require("../models/models");



const uploadFile = async (req, res, next) => {

    try{
        const fileDetails = {
            originalName: req.file.originalname,
            modifiedName: req.file.filename,
            user: "bantikumarsingh91@gmail.com",
            size: req.file.size,
            path: req.file.path
        }
        const insertedFileDetails = await FileModol.create(fileDetails);
        res.json({
            success: true,
            message: "Upload file API",
            fileId: insertedFileDetails._id
        })
    }catch(err){
        next(err);
    }
}
const shareFile = async (req, res, next) => {
    try{
        let id = req.body.fileId;
        let fileDetails = await FileModol.findById(id);
        if(!fileDetails){
            res.status(400).json({
                success: false,
                message: "Your given id does not exist"
            })
            return;
        }
        console.log(fileDetails)
        res.json({
            success: true,
            message: "Share file API",
            data: `/api/v1/file/download/${id}`,
        })
    }catch(err){
        next(err);
    }
    
}

const getfiles = async (req, res, next) =>{
    try{
        let files = await FileModol.find({});
        if(!files){
            return res.status(400).json({
                success: false,
                message: "No files in Database!"
            })
        }
        res.json({
            success: true,
            message: "Get Files API",
            results: files
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const downloadFile = async (req, res, next) => {
    try{
        let id = req.params.id;
        let fileDetails = await FileModol.findById(id);
        if(!fileDetails){
            res.end("Invalid Id")
            return;
        }
        res.download(fileDetails.path, fileDetails.originalName );
    }catch(err){
        next(err)
    }
    
}
const deleteFile = async (req, res, next) => {
    try{
        let id = req.params.id;
        let fileDetails = await FileModol.findByIdAndDelete(id);
        if(!fileDetails){
            res.end("Invalid Id")
            return;
        }
        res.download(fileDetails.path, fileDetails.originalName );
    }catch(err){
        return res.status(400).json({
            success: false,
            message: "No files in Database!"
        })
    }
    
}

const fileController = {
    uploadFile,
    shareFile,
    getfiles,
    downloadFile,
    deleteFile,
}

module.exports = fileController;