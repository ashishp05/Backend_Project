const express = require("express");
const router = express.Router();

const {postEmpData} = require("../controller/postEmpData");
const {getEmpData} = require("../controller/getEmpData");
const {putEmpData} = require("../controller/putEmpData");
const {deleteEmpData} = require("../controller/deleteEmpData");


router.post("/post" , postEmpData);
router.get("/get" ,getEmpData);
router.put("/update" ,putEmpData);
router.delete("/delete" ,deleteEmpData);

module.exports =router;