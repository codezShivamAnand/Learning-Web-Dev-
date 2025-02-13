let obj = {
    name : "rohan",
    age : 23,
    gender : "Male"
}

// for in looop, iterate over keys in an obj 
for (let key in obj){
    console.log(key, obj[key]);
}

let obj2 = Object.create(obj); //obj is prototype of obj2 i.e obj2 inherit the propertoes of obj 
console.log(obj2); // output: empty, cz obj2 ka khud ka koi property nhi hai abhi   
obj2.bank = "Bob";
obj2.branch = "Vai";
console.log(obj2);// isse sirf obj2 ka khud ka properties print hoga, inherit wala peoperty print nhi karwata  
// console.log(obj2.name);
console.log(Object.keys(obj2)); // inherit wala keys wont be printed 

for (let key in obj2){
    console.log(key);
}
// NOTE : Object.keys(obj_name), prints only self property of an obj and not the inherited ones
// whereas for-in loop : has the access of the inherited+self properties of obj

// writable 
// enumerable 
// configut