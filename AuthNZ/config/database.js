const mongoose = require("mongoose");

const dbConnect = () =>
{
    mongoose.connect(process.env.Database_Url)
    .then(() => 
    {
        console.log("DB Connection is successfully.")
    })
    .catch((error) => {
        console.log("error in DB connection");
    });
    
}
module.exports = dbConnect ;