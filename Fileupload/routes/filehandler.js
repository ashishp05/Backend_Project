
const express = require("express");
const router = express.Router();

const {fileUpload , imageUpload , videoUpload , imageReducer ,pdfUpload} = require("../controller/fileUpload");


router.post("/fileupload" , fileUpload);
router.post("/imageupload", imageUpload)
router.post("/imageureducer", imageReducer)
router.post("/pdfupload", pdfUpload)
router.post("/videoupload", videoUpload)


module.exports = router;