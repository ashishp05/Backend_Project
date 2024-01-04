const mongoose  = require("mongoose");
const Employee = require("../model/Employee");


exports.getEmpData = async(req ,res) =>
{
    try
    {
       const result = await Employee.find({});

       res.status(200).json(
        {
            sucess :true,
            data : result,
            message : "data fatched successfully!"
        }
       )

    }
    catch(err)
    {
        return res.status(500).json(
            {
                sucess :false,
                data : "error ocured in gettin data"
            }
        )
    }
}