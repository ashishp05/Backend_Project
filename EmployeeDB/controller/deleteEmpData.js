
const Employee =require("../model/Employee");

exports.deleteEmpData = async(req ,res) =>
{
    try 
    {
        const {id} = req.body;
        const result = await Employee.findByIdAndDelete({_id :id })

        res.status(200).json(
            {
                sucess :true,
                message : `data which id = ${id}  is deleted successfully`
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