  const Data = require("../model/schema");
  const bycrypt = require("bcrypt");

exports.authSignup = async(req ,res) =>
{
   try
   {
    const {name ,email ,password , role} = req.body;
    if(!name || !email || !password || !role )
    {
      res.status(400).json(
        {
          message:"fill all data carefully"
          
        })
    }
    const existUser = await Data.findOne({email})
     if(existUser)
     {
      res.status(303).json(
        {
          message : "user is already exist."
        }
       )
     }
     let hashPassword ;
      hashPassword = await bycrypt.hash(password , 10);

     const result = await Data.create({name ,email ,password:hashPassword ,role});
      res.status(200).json(
        {
          success:true,
          data :result,
          message :"user is sign up successfully."
        }
      )
      

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