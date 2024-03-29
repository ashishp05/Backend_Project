const mongoose =require("mongoose");

const dataSchema = new mongoose.Schema(
    {
        name :
        {
            type : String,
            required :true
        },
        email :
        {
            type : String,
            required :true
        },
        password :
        {
            type : String,
            required :true
        },
        role :
        {
            type : String,
            enum : ["Admin" , "student"]
        }
    }
);

module.exports = mongoose.model("Data" , dataSchema);

