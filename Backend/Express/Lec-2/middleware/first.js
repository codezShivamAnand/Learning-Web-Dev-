const express = require('express');

const app = express();

app.use('/user', (req,res)=>{
    res.send("Hello, ji");
})

app.listen(5000,()=>{
    console.log("Listening at port 5000");
})