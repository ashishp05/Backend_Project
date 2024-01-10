const cloudinary = require("cloudinary").v2;
require("dotenv").config();

exports.cloudinaryConnect = () =>
{
    try{
        cloudinary.config({
            cloud_name : process.env.C_name,
            api_key :process.env.Api_key,
            api_secret : process.env.Api_secret
        })

    }catch(error)
    {
        console.log("error is occure");
        console.log(error.message);
        

    }
}