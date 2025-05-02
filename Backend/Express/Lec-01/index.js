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

app.use("/hom?e", (req,res)=>{
    res.send("HOME PAGE");
})
// ? -> the letter before the sign '?' becomes optional 
app.use('/abou*t', (req,res)=>{
    res.send("ABOUT PAGE");
})

// will never reach to this when we route , http://localhost:4000/aboundfmbdsht/shiv , cz ? prefix matching so it will check the id inside the first "/abou*t" routes    
// app.use('/abou*t/:name', (req,res)=>{
//     console.log(req.params);
//     res.send("ABOUT PAGE with id ");
// })


// '+' the letter just before it can be repeatedd many times in routing  
app.use("/person+al", (req,res)=>{
    res.send("PERSONAL PAGE");
})

// : - parameters , used for dynamic routing 
app.use("/contact/:id/:user", (req,res)=>{
    console.log(req.params);
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