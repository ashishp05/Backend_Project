const express = require("express");
const app = express();
require("dotenv").config();

PORT = process.env.PORT; 
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


const dbConnect = require("./config/database");
dbConnect();

const cloudinary = require("./controller/clodinary");
cloudinary.cloudinaryConnect();


const upload = require("./routes/filehandler");
app.use("/api/v1" ,upload);

app.listen(PORT , ()=>
{
    console.log("App is started at 3000");
})
app.get("/" ,(req ,res) =>
{
    res.send(`<h1>This is heading.</h1>`);
})