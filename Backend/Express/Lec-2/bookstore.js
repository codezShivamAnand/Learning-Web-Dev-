const express = require('express');

const app = express(); 

const BookStore =[
    {id:1, name: "Harry Potter", author: "Jk Rowling"},
    {id:2, name: "Friends", author: "Frnd author"},
    {id:3, name: "Nexus", author: "RohitNegi"},
    {id:4, name: "Kick", author: "Salman"},
    {id:5, name: "Raja Babu", author: "Govinda"},
    {id:6, name: "System Design", author: "RohitNegi"}

]
// TREAT ALL THESE METHOD AS A FUNCTION CALL 

// routing in app.get : puri string route match karwata hai then andr ghusta hai 
app.get("/book", (req,res)=>{ // at this route the user will be getting all the books 
    
    // localhost:5000/book?author=RohitNegi
    console.log(req.query); // { author: 'RohitNegi' }
    
    const book = BookStore.filter(book => book.author === req.query.author);    
    // res.send(BookStore);
    res.send(book);
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

// patch 
app.patch("/book", (req,res)=>{ // req me hi user jo bhi req(through post or patch or put or delete )karta hai woh req.body kar ke access karte hai
    const id = req.body.id;
    // console.log(book);
    const book = BookStore.find( info => info.id===id);
    
    // Since patch me, user can modify some of the attributes not all, to har attributes ke  modifications ka check lagana padega 
    if(req.body.author)
    book.author = req.body.author;

    if(req.body.name){
        book.name = req.body.name;
    } 
    // console.log(book);
    res.send("Patch successfully");
})

//put
app.put("/book", (req,res)=>{
    const book = BookStore.find(book => book.id === req.body.id);
    // put me saare attributes user modify karta hain 
    book.author = req.body.author;
    book.name = req.body.name;
})

// delete

app.delete("/book/:id",(req,res)=>{ //  route : book/2 , means id = 2 
    // console.log(req.params); // { id: '2' }
    const id = parseInt(req.params.id);
    const index = BookStore.findIndex(book => book.id===id);
    // delete 
    BookStore.splice(index, 1);
    res.send("Deleted-data");
})

app.listen(5000,()=>{
    console.log("Listening at port 5000");
})