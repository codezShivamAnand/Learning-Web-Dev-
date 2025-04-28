let obj = {
    name : "rohan",
    age : 23,
    gender : "Male"
}

// for in loop, iterate over keys in an obj 
// for (let key in obj){
//     console.log(key, obj[key]);
// }

let obj2 = Object.create(obj); //obj is prototype of obj2 i.e obj2 inherit the propertoes of obj 
console.log(obj2); // output: empty, cz obj2 ka khud ka koi property nhi hai abhi   
obj2.bank = "Bob";
obj2.branch = "Vai";
console.log(obj2);// isse sirf obj2 ka khud ka properties print hoga, inherit wala peoperty print nhi karwata  
console.log(obj2.name); // rohan 
console.log(Object.keys(obj2)); // inherit wala keys wont be printed 




// writable 
// enumerable 
// configut