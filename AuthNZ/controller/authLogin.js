const Data = require("../model/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authLogin = async(req ,res) =>
{
    try
    {
        const {email , password} =req.body;

        if(!email || !password )
        {
          res.status(400).json(
            {
              message:"fill all data carefully"
              
            })
        }

        let User = await Data.findOne({email})
        if(!User)
        {
         res.status(303).json(
           {
             message : "user is not exist,please register first !"
           }
          )
        }
          const payload = {
            email : User.email ,
            id : User._id,
            role : User.role
          }
        if( await bcrypt.compare(password , User.password))
        {
          let token =  jwt.sign( payload , process.env.Jwt_Secret , { expiresIn : "2h"})
          User = User.toObject();
         User.token =token ;
         User.password = undefined;

         res.cookie( "mycookie" ,token , {expires: new Date(Date.now() + 900000), httpOnly: true} ).status(200).json(
            {
                success :true,
                token ,
                User,
                message : "user log in successsfully."
            }
         )

             
        }
        else
        {
            res.status(303).json(
                {
                  message : "password in not correct !"
                }
               )
        }
      

    }
    catch(error)
    {
        return res.status(500).json(
            {
              success : false,
              message :error.message
            }
           )
    }
}