const express = require("express");
const app = express();
require("dotenv").config();
 
app.use(express.json());
PORT =process.env.PORT   || 4000

app.listen(PORT , () =>
{
    console.log(`server is started at  port number ${PORT}.`);
});

const dbConnect = require("./config/database");
dbConnect();




const auth = require("./routes/authNZ");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/data/auth" ,auth);


app.get("/" , (req ,res) =>
{
    res.send(`this is heading of ${PORT}.`);
});