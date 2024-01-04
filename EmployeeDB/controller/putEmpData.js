const mongoose =require("mongoose");
const Employee = require("../model/Employee");

exports.putEmpData = async(req ,res) =>
{
   try
   {

    const { id,name ,email ,password ,role ,experience} = req.body;

    const result = await Employee.findByIdAndUpdate({_id : id},{name ,email,password , role ,experience})

 
    res.status(200).json(
        {
            sucess :true,
            data : result,
            message : "data updated successfully!"
        }
     )

   }
   catch(err)
   {
    return res.status(500).json(
        {
            sucess :false,
            data : "error ocured in updating data",
            message : err.message
        }
    )
   }
}