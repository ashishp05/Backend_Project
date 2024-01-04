  // middleware : auth ,isStudent ,isAdmin

  const jwt =require("jsonwebtoken");
  require("dotenv").config();

  exports.auth = (req ,res ,next) =>
  {
    try
    {
               //extract jwt token
        const token = req.cookies.token || req.body.token ;
         if(!token)
         {
            return res.status(401).json(
                {
                    success : false,
                    mesaage : "token is not available."
                }
            )
         }
         //verify the token
         try{
            const payload = jwt.verify(token , process.env.Jwt_Secret)
            console.log(payload);

            req.User = payload;

         }catch(error)
         {
            return res.status(401).json(
                {
                    success : false,
                    mesaage : "token is not valid."
                }
            )

         }
         next();

    }catch(error)
    {
        return res.status(401).json(
            {
                success : false,
                mesaage : "something went wrong while verify the token.",
                data : error.message
            }
        )

    }
  }

  exports.isStudent = (req ,res ,next) =>
  {
    try{
        if(req.User.role !=="student")
        {
            return res.status(401).json(
                {
                    success : false,
                    mesaage : "this route is only for admin."
                }
            )
        }
        next();
    }
    catch(err)
    {
        return res.status(500).json(
            {
                success : false,
                mesaage : "error in student route ."
            }
        )
    }
  }

  exports.isAdmin = (req ,res ,next) =>
  {
    try{
        if(req.User.role !=="Admin")
        {
            return res.status(401).json(
                {
                    success : false,
                    mesaage : "this route is only for student."
                }
            )
        }
        next();
    }
    catch(err)
    {
        return res.status(500).json(
            {
                success : false,
                mesaage : "error in Admin route ."
            }
        )
    }
  }