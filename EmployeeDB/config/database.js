const mongoose = require("mongoose");

const dbConnect = () =>
{
    mongoose.connect(process.env.Database_Url)
    .then(() =>
    {
        console.log("Database connected successfully !")
    })
    .catch((error) =>
    {
        console.log("error occured");
        console.error(error.message);
        process.exit(1);
    })

}
module.exports = dbConnect ;