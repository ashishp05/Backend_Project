 // import model

const Todo = require("../model/Todo");


  //define route handler  bcz  jab router par request hit hoti hai tabhi controller par req. ati hai

  exports.createtodo = async(req , res) =>
  {
    try
    {
        //extract title and discription from req. body

        const {title,description} = req.body;
        // create todo object 
        const response = await Todo.create({title,description})
        // send json response msg
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "entry ho gaiiii"
            }
        )
    }
    catch(error)
    {
        console.error(error)
       
        res.status(500).json(
            {
                success: false,
                data:"internal server  error",
                message: error.message,
            }
        );
    }

  }