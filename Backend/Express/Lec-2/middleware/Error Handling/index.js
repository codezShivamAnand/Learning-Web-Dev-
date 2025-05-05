const express = require('express');
const app = express();
const {Auth} = require("./Auth");
app.use(express.json());

const FoodMenu = [
    {id:1, food:"Chowmein", category:"veg", price:500},
    {id:2, food:"Butter Naan", category:"veg", price:100},
    {id:3, food:"Chicken", category:"non-veg", price:1000},
    {id:4, food:"Mutton", category:"non-veg", price:1500},
    {id:5, food:"Momo", category:"veg", price:300},
    {id:6, food:"Chai", category:"veg", price:50},
    {id:7, food:"Rajma", category:"veg", price:300},
    {id:8, food:"Roti", category:"veg", price:20},
    {id:9, food:"Lolipop", category:"non-veg", price:700},
    {id:10, food:"Kebab", category:"non-veg", price:400},
    {id:11, food:"paneer", category:"veg", price:800},
    {id:12, food:"Egg Curry", category:"non-veg", price:300},
    {id:13, food:"salad", category:"veg", price:100},
    {id:14, food:"shourma", category:"veg", price:300},
    {id:15, food:"Butter Chicken", category:"non-veg", price:900},
    {id:16, food:"Mushroom", category:"veg", price:700},
]

// user add karega cart me 
const AddToCart= [];

// Saare food items dikhenge 
app.get("/food",(req,res)=>{
    res.send(FoodMenu);
})

// USER and ADMIN me difference kaise karwayenge 
// AUTHENTICATION and AUTHORIZATION 
// Authentication : verify karna jo claim kar rha whi hai ya nhi , jab login karte ho toh wha authenticate karta hai 
// Authorization :  Kya kya power hai, after login into insta , kya kya functionlaity/authority mil jati hai login hone ke baad., but main kisi ke post ko delte nhi kar skta , kisi ke reeel ko post nhi kar skta 
// app.use("/admin",(req,res,next)=>{
//     //authntication karna padega ki kya ye admin hi hai 
//     //dummy code 
//     const token = "ABCDEF";
//     const Access = token === "ABCDEF" ? 1: 0;
//     if(!Access){
//         res.status(403).send("No permission");
//     }
//     next();
// }).

// app.use("/admin",Auth); // if using this then dont need Auth in post delete and patch, otherwise individually use Auth in each of them 

app.post("/admin", Auth, (req,res)=>{
    // ADD item into the food menue
    // //authntication karna padega ki kya ye admin hi hai 
    // //dummy code of AUTH 
    // const token = "ABCDEF";
    // const Access = token === "ABCDEF" ? 1: 0;
    // if(Access){
    //     FoodMenu.push(req.body);
    //     res.status(201).send("item added successfully");
    // }else{
    //     res.status(405).send("Only admins allowed to add items ");

    // }
// since auth is handled sep we can directly write 
    FoodMenu.push(req.body);
    res.status(201).send("item added successfully");
})

app.delete("/admin/:id", Auth, (req,res)=>{
    // const token = "ABCDEF";
    // const Access = token === "ABCDEF" ? 1: 0;
    // console.log(req.params.id);
    // if(Access){
    //     const id = parseInt(req.params.id);
    //     const food = FoodMenu.findIndex(item => item.id===id);

    //     if(food=== -1){
    //         res.status(401).send("Authentication needed")
    //     }else{
    //         FoodMenu.splice(food,1);
    //         res.send("deleted");
    //     }
    // }

    const id = parseInt(req.params.id);
    const food = FoodMenu.findIndex(item => item.id===id);

    if(food=== -1){
        res.status(401).send("Authentication needed")
    }else{
        FoodMenu.splice(food,1);
        res.send("deleted");
    }
})

app.patch("/admin",Auth,(req,res)=>{
    // { // pATCH
    //     "id":3, 
    //     "food":"tikka masala", 
    //     "category":"veg", 
    //     "price":90
    // }
    //AUTH 
    // const token = "ABCDEF";
    // const Access = token === "ABCDEF" ? 1: 0;

    // if(Access){
    //     const id = parseInt(req.body.id);
    //     const item = FoodMenu.find(item=>item.id===id); // by reference jayega item me isliye item me change karne pr foodmenue ke andr item chamge ho rhe hai 

    //     console.log(item); // { id: 3, food: 'Chicken', category: 'non-veg', price: 1000 }
    //     // patch koi ek ya many attributies bhi kar skta hai, toh thts why we check for every attributes 
    //     if(item){
    //         if(req.body.food)
    //             item.food = req.body.food;
    //         if(req.body.category)// agr category mein change kiya hai
    //             item.category = req.body.category;
    //         if(req.body.price)
    //             item.price = req.body.price;
    //         // console.log(item); // { id: 3, food: 'tikka masala', category: 'veg', price: 90 }
    
    //         res.send("patched succcessfully");
    //     }
        
    // }else{
    //     res.send("Bad request");
    // }

    const id = parseInt(req.body.id);
    const item = FoodMenu.find(item=>item.id===id); // by reference jayega item me isliye item me change karne pr foodmenue ke andr item chamge ho rhe hai 

    console.log(item); // { id: 3, food: 'Chicken', category: 'non-veg', price: 1000 }
    // patch koi ek ya many attributies bhi kar skta hai, toh thts why we check for every attributes 
    if(item){
        if(req.body.food)
            item.food = req.body.food;
        if(req.body.category)// agr category mein change kiya hai
            item.category = req.body.category;
        if(req.body.price)
            item.price = req.body.price;
        // console.log(item); // { id: 3, food: 'tikka masala', category: 'veg', price: 90 }

        res.send("patched succcessfully");
    }
    else{
        res.send("Item not exist")
    }
})

app.listen(6000,()=>{
    console.log("Listening at port 6000");
})