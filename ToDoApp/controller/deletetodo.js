const Todo = require("../model/Todo");

exports.deletetodo =async(req,res) =>
{
    try{
         
        const {id} =req.params;

      const result = await Todo.findByIdAndDelete({_id:id});
        

    res.status(200).json(
        {
            success: true,
            data: result,
            message: "deleted   the data successfully"
        }
    )
    }
    catch(error)
    {
        res.status(500).json(
            {
                
                    success: false,
                    data:"internal server  error",
                    message: error.message,
                
            }
        );
    }
}