 const mongoose = require("mongoose");
 require("dotenv").config();
 const dbConnect = () =>
 {
    mongoose.connect(process.env.Database_Url)
    .then( () =>
    {
        console.log("DB  connected successfully.");
    })
    .catch( (error) =>
    {
        console.log("Error occure in Db connection.")
        console.log(error.message);
        process.exit(1);
    })
 }
 module.exports = dbConnect;