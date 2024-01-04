const exp =require("express");
const app = exp();

app.listen(5000 , () => {
    console.log("server started !")
});

   const bodyparser = require('body-parser');
   app.use(bodyparser.json());
app.get('/home' , (requst ,response) =>
{
    response.send("response are done ")
})

app.post('/about' ,(requst ,response) =>
{
    const {mo,name} =requst.body;
    console.log(mo);
    console.log(name);
    response.send("data posted successfuly!")
})
////conect mongodb and express

const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => {console.log("connection successed !")}
).catch((error) => {console.log("error occured !")});