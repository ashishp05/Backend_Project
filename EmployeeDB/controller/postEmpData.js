const bcrypt = require("bcrypt");

const Employee = require("../model/Employee");

exports.postEmpData = async(req ,res) =>
{
    try
    {
        
        const {name ,email ,password ,role ,experience} = req.body;
        
         
         if(!name || !email || !password|| !role || !experience)
         {
            console.log("please fill all require data.");

         }
         const existUser = await Employee.findOne({email});

         if(existUser)
         {
            res.status(400).json(
                {
                    sucess : false,
                    message : `user is already regesterd with ${email} id.`
                }
              )
         }
        let hasePassword;
        try
        {
          hasePassword = await bcrypt.hash(password ,10);
        }
       catch(err)
       {
           res.status(500).json(
               {
                   data : "error in hashing",
                   message : err.message
                   
               }
           )
   }
         const result = await Employee.create({name ,email ,password:hasePassword ,role ,experience});

         res.status(200).json(
            {
                sucess :true,
                data : result,
                message : "data posted(sign up) successfully!"
            }
         )
    
 } catch(err)
    {
        return res.status(500).json(
            {
                sucess :false,
                data : "error ocured in posting data",
                message : err.message
            }
        )

    }
}