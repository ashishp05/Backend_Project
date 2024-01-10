const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();


const fileSchema = new mongoose.Schema(
    {
        name : 
        {
            type : String,
            required : true
        },
        imageUrl : 
        {
            type : String,
            required : true
        },
        email : 
        {
            type : String,
            required : true
        },
        tag : 
        {
            type : String,
            required : true
        }

    }
)

//post middelweware always above from model exports.

fileSchema.post("save" ,async function(doc)
{
    try{
        console.log("Doc :",doc)

        let transpoter = nodemailer.createTransport(
            {
                host:process.env.HOST,
                auth:{
                    user:process.env.MAIL_USER,
                    pass:process.env.MAIL_PASS

                }
            }
        );
        //send mail
        let info =transpoter.sendMail(
            {
                from: "Ashish patel",
                to:doc.email,
                subject:"About uploading MEDIA FILES.",
                html:`<h1>Successfully uploaded your Media-files.</h1> <p>YOUR MEDIA IS UPLOADED AT ${doc.imageUrl} ,${doc.name} & ${doc.tag}</p>`
            }
        ) 

    }catch(err)
    {
        console.log("error avii");
    }
})


module.exports = mongoose.model("File" , fileSchema );