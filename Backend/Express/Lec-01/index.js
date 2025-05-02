const express = require("express");

// create express app 
const app = express();

// respond 
// app.use((req,res)=>{
//     res.send({"name" : "Shiv", "age":"20", "amount": 3400}); // API 
//     // res.send("Hello Baccho");
// })
// How do express handle routing 
// rounting is handled one by one 
// "/about"
// "/personal"
// "/" 

app.use("/home", (req,res)=>{
    res.send("HOME PAGE");
})
// ? -> the letter before the sign '?' becomes optional 
app.use('/abou?t', (req,res)=>{
    res.send("ABOUT PAGE");
})
// '+' the letter just before it can be repeatedd many times in routing  
app.use("/person+al", (req,res)=>{
    res.send("PERSONAL PAGE");
})
app.use("/contact", (req,res)=>{
    res.send("CONTACT PAGE");
})

// write it at last when cz .use matches prefix so if its written at the beginning then all the routes like /home, /about etc will render '/' route cz of prefix matching 
app.use("/", (req,res)=>{
    res.send("Root PAGE");
})

// listen at port number 
app.listen(4000, ()=>{
    console.log("listening at port 4000");
})