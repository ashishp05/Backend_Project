
const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => 
{
    mongoose.connect(process.env.Database_Url).then(() => console.log("connection successfully !"))
    .catch((error) => {
        console.log("error occured ");
     console.error(error.message);
     process.exit(1);
    } )
   
}
module.exports = dbConnect; 