const mongoose =require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        name :
        {
            type :String,
            required : true 
        },
        email :
        {
            type :String,
            required : true 
        },
        password :
        {
            type :String,
            required : true 
        },
        role :
        {
            type :String,
            enum : ["Admin" ,"visitor" , "Student"]
        },
        experience :
        {
            type :Number,
            required : true 
        },
    }
);

module.exports = mongoose.model("Employee" , employeeSchema);