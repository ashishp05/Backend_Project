
const Todo = require("../model/Todo");

exports.updatetodo =async(req,res) =>
{
    try{
     const {id} = req.params;
     const {title , description} = req.body;


      const result = await Todo.findByIdAndUpdate({_id:id} ,{title ,description ,updatedAt :Date.now()});
        

    res.status(200).json(
        {
            success: true,
            data: result,
            message: "updated  the data successfully"
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