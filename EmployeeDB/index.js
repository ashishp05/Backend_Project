
const express = require("express");
const app = express();

require("dotenv").config();

PORT = process.env.PORT || 4000 ;

app.use(express.json());

const dbConnect =require("./config/database");
dbConnect();
const empdata = require("./routes/employees");
app.use("/data/emp" ,empdata )
app.get("/", (req ,res) =>
{
    res.send(`<h1>this is heading</h1>`)
})
 
app.listen(PORT , () =>
{
    console.log("App is started at 3000");
})