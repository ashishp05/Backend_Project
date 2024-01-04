
const Todo = require("../model/Todo");

exports.gettodo =async(req,res) =>
{
    try{
        const response = await Todo.find({});

    res.status(200).json(
        {
            success: true,
            data: response,
            message: "find all the data successfully"
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

exports.gettodoById= async(req,res) =>
{
    try{
      const id = req.params.id;
      const result = await Todo.findById({_id:id})
     
       if(!result)
       {
        res.status(404).json(
            {
                
                    success: false,
                    data:"internal server  error",
                    message: error.message,
                
            })
       }
    

      res.status(200).json(
        {
            success: true,
            data: result,
            message: "find single data successfully"
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
                
            })
    }

}