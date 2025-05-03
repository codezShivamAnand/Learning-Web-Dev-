const express = require('express');

const app = express();



// app.use('/user', (req,res)=>{
//     res.send("Hello, ji");
// })

// app.use('/user', (req,res, next)=>{
//     console.log("first");
//     res.send("Hello, ji I am first");

//     next();

//     console.log("sixth");
// },
// (req,res,next)=>{
//     console.log("Second");
//     // res.send("Hello, ji I am Second");

//     next();

//     console.log("fifth");
// },
// (req,res)=>{
//     console.log("third");
//     // res.send("Hello, ji I am third");
//     console.log("fourth");

//     // next(); // will give 404 error userr not found cz there is no function defined after this 
// }
// )
                        // OR

// WE can also wrap route handler in an ARRAY, LIKE: app.use(route, RH, [RH,RH],RH);
// app.use('/user', [(req,res, next)=>{
//     console.log("first");
//     res.send("Hello, ji I am first");

//     next();

//     console.log("sixth");
// },
// (req,res,next)=>{
//     console.log("Second");
//     // res.send("Hello, ji I am Second");

//     next();

//     console.log("fifth");
// },
// (req,res)=>{
//     console.log("third");
//     // res.send("Hello, ji I am third");
//     console.log("fourth");
    
//     // next(); // will give 404 error userr not found cz there is no function defined after this 
// }]
// )
                        // OR

// this also works fine, we can write each of them independently connected by next

// MIDDLEWARE : khud response nhi karta hai, agle wale ko pass on kara deta hai.
 // mw -> mw -> mw -> RequestHandler
 // jo bhi response karega woh request handler uskeuper wala Middleware 

app.use('/user', (req,res, next)=>{
    console.log("first");
    // res.send("Hello, ji I am first");

    next();
})

app.use('/user', (req,res,next)=>{
    console.log("Second");
    // res.send("Hello, ji I am Second");

    next();
})

app.use('/user', (req,res, next)=>{ 
    console.log("third");
    // res.send("Hello, ji I am third");
    next();
})

app.use('/user', (req,res)=>{ // THIS IS THE FINAL FUNCTION WHICH RESPONDs so this is called REQUEST HANDLER or ROUTE HANDLER. Rest above are called MIDDLEWARE  
    console.log("fourth");
    res.send("Hello, ji I am REQUEST HANDLER");
})


// middleware : ke through data pass hoga , whi pe data processing ho jaegi, logs store kar li jaegi, Authentication bhi check kar lega 
// NOTE exress.json() is also a middleware, which convert json to js obj 
app.use("/user", (req, res, next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    // logs store 
    // AUthorization and authentication 
    next();
}) // middleware reduces redudant code which would have been common for get post delete ...

app.get("/user", (req,res)=>{
    res.send("Info about user");
})

app.post("/user",(req,res)=>{
    res.send("Info updated");
})

app.delete("/user",(req,res)=>{
    res.send("Info deleted");
})

app.listen(5000,()=>{
    console.log("Listening at port 5000");
})