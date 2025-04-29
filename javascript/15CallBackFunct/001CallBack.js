function names(fun){
    console.log("Hello I am indian");
    fun();
}

// function greet(){
//     console.log("i am a call back funct");
// }
// names(greet);
                      //  or 
// names(function greet(){
//     console.log("i am a call back funct");
// });

// or 
// const greet = function(){
//     console.log("i am a call back funct");
// }
// names(greet);// reference is passed as argument 
            // or 

names(()=>{
    console.log("i am a call back funct");
});

// call back func: function ke andr dusre funct ka reference 

// REAL WORLD EX 
function fetchData(){
    console.log("i am fetching data");
}

// this setInterval is also a call back function 
// setInterval(fetchData, 5000); //  function_name and time in milisec