const express = require('express');
const router = express.Router();



const {uploadFile, shareFile, downloadFile, deleteFile, getfiles} = require("../controller/file.controller");
const upload = require('../middlewares/fileUpload');

router.post("/upload",upload.single('file'), uploadFile);

router.post("/share", shareFile);

router.get("/getFiles", getfiles);

router.get("/download/:id", downloadFile);

router.delete("/delete/:id", deleteFile);

module.exports = router;