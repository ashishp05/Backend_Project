const exp=require("express");
const app =exp();

require("dotenv").config();

const PORT = process.env.PORT || 4000 ;

//middleware to parse json req body
app.use(exp.json());

//import routes for todo api

const todoroutes =require("./routes/todos");

//mount 

app.use("/api/v1" ,todoroutes)

app.listen(PORT , () =>
{
     console.log(`server started at ${PORT}`);
})

//connection db 
const Connect = require("./config/database")
Connect();

app.get("/" , (req, res) =>
{
    res.send(`<h1>this is heading</h1>`)
})