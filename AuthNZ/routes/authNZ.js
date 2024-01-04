const express = require("express");
const router = express.Router();

const {authSignup} = require("../controller/authSignup");
const {authLogin} = require("../controller/authLogin");
const {auth ,isAdmin ,isStudent} =require("../middleware/auth");

router.post("/signup" ,authSignup);
router.post("/login" ,authLogin);

//protected routes
router.get("/student" , auth ,isStudent ,(req ,res) =>
{
    res.json({
        success : true,
        message : "welcome in student portal."
    })
})
router.get("/admin" ,auth ,isAdmin ,(req ,res) =>
{
    res.json({
        success : true,
        message : "welcome in admin portal."
    })

})
router.get("/demo" ,auth ,(req ,res)=>
{
    res.json({
        success : true,
        message : "welcome in demo portal."
    })
})
module.exports =router;