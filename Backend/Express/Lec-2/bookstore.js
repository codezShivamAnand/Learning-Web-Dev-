const express = require('express');

const app = express(); 

const BookStore =[
    {id:1, name: "Harry Potter", author: "Jk Rowling"},
    {id:2, name: "Friends", author: "Frnd author"},
    {id:3, name: "Nexus", author: "RohitNegi"}
]
// TREAT ALL THESE METHOD AS A FUNCTION CALL 

// routing in app.get : puri string route match karwata hai then andr ghusta hai 
app.get("/book", (req,res)=>{ // at this route the user will be getting all the books 
    res.send(BookStore);
})

//Parser 
app.use(express.json());

// now the user wants to acess a particular book, we can handle that with dynamic paramter 
app.get("/book/:id", (req, res)=>{
    // console.log(req.params); // { id: '3' } id is string so parseInt 
    const id = parseInt(req.params.id); // id is number is 
    // send the book with this id
    const book =   BookStore.find(books=> books.id === id);
    // console.log(book);

    // res.send("milgyi");
    res.send(book);
}) 

// to post data 
app.post("/book", (req, res)=>{
    // console.log(req.body);
    const newbook = req.body;
    BookStore.push(newbook);
    res.send("saved successfully");
})

app.listen(6000,()=>{
    console.log("Listening at port 5000");
})