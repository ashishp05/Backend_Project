
const express = require("express");
const router =express.Router();

// import controller
 const {createtodo} =require("../controller/createtodo");
 const {gettodo ,gettodoById} = require("../controller/gettodo");
 const {updatetodo} = require("../controller/updatetodo");
 const {deletetodo} = require("../controller/deletetodo");



 //define all api
 router.post("/createtodo" ,createtodo);
 router.get("/gettodo/:id" ,gettodoById);
 router.get("/gettodo" ,gettodo);
 router.put("/updatetodo/:id",updatetodo);
 router.delete("/deletetodo/:id",deletetodo);




 module.exports =router;