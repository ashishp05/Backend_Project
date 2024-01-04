
const express = require("express");
const app = express();

require("dotenv").config();
PORT = process.env.PORT || 4000

app.listen(PORT, () =>{ console.log(`connection successfully at ${PORT}`)});
// use middle ware

app.use(express.json());

const blog = require("./routes/bolgs");
 app.use("/api/v1" ,blog);

 const dbConnect = require("./config/database");
 dbConnect();

 app.get("/" , (req, response) =>
 {
    response.send(`<h1>this is blog app.</h1>`)
 })