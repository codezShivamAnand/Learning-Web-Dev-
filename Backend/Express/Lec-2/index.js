const express = require('express');

const app = express(); // app is an instance of an ecxpress so app is basiclly an obj 

//parsing karni hogi 
app.use(express.json()); // express.json is a parser: convert (JSON)string to JS obj  

// app.get will run when the req to the backend is of a method GET 
app.get("/user",(req,res)=>{
    console.log(req); ///backend me request aya which u can actulaly see in the console 
    res.send({name:"Shivi"}); // Backend ne respond kiya with data 
})

// app.post  will run when the req to the backend is of a method POST 
app.post("/user",(req,res)=>{
    console.log("Data reached backed safely");
    console.log(req.body); 
    // console.log(typeof req.body.age);  // number , but make sure its number 
    res.send("Data saved successfully");
})
// NOTE : req :ke pass fronted se aa rha data hota hai
//        res : ke pass backend se aa jaa rha data hota hai 


app.listen(5000,()=>{
    console.log("Listening at port 5000");
})

