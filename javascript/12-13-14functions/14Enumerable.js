/*
let obj = {};

obj.name = "rohit";
obj.age = 29;

// key value , writable 
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// writable == true means value ko change kar skta hun
obj.name = "Mohit" 
// configurable == true means u can modify writable and enumerable of an obj 
*/


let obj = {};
Object.defineProperty(obj, "name",{
    value : "rohit",
    // writable : true,
    writable : true,
    enumerable : true,
    // configurable : true
    configurable : false

})
// obj.name =  " mohit"; 
console.log(obj);
obj.name =  " mohit";
Object.defineProperty(obj, "name",{
    writable : false,
})
obj.name =  "sogan"; 
console.log(obj);

// practical example in bank 

const customer = {
    name : "Sohan",
    age : 23,
    account_number : 12484834,
    balance : 2000
}
// name and account_number should not be changed for customer of bank 
Object.defineProperty(customer, "name",{
    writable : false,
})
 // now if anyone wants to change the name and account_number property of customer of the bank , it cant 

customer.name = "REMA";
console.log(customer.name); // no change in name 


// ENUMERABLE   
const customer = {
    name : "Sohan",
    age : 23,
    account_number : 12484834,
    balance : 2000
}

let customer2 = Object.create(customer); 
customer2.city = "Haridwar";
customer2.state = "Uk";

Object.defineProperty(customer, "name",{ // name ka enumerable konfalse kar diya 
    enumerable : false,
})
// jis jis property ka enumerable true hoga uska access hoga ya print kar skte hai for-in loop se, 
// even inherited property whose enunmerable is true uska bhi access hoga in the new obj  
for(let key in customer)
    console.log("customer", key);

for(let key in customer2) // has access to all the property of customer except "name" since name ka enumerable false hai  
    console.log("customer2", key); 

/* QUESTION IS why , customer jo ki Object.prototype se inherited hai, 
 for(let key in customer)
    console.log("customer", key); // dindnt print(access) the keys of Object.prototype kyuki Object.prototype ke keys ka enumerbale false set hoga  
  proof below for the key tostring() of Object.protoype
 */
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
/* output
{
  value: [Function: toString],
  writable: true,
  enumerable: false,
  configurable: true
}
 */
Object.defineProperty(Object.prototype, "tostring", {
    enumerable: true,
})
for(let key in customer)
    console.log(key); // now it prints even the tostring 

// HW
// defineproperties()
// ==========================================================================================================
/*
Q. why we dont use for in loop for arrays?
 Ans. Arrays is an obj, and values of arrays actually stored like obj in key value pair 
 const arr = [10,20,30,40];
 // interanally stored as 
 0: 10,
 1: 20,
 2: 30,
 3: 40

 for (let index in arr){
    console.log(index); // 0,1,2,3
 }
for-in loop goes through every keys of obj/arr , outputs keys : 0,1,2,3

Now if insert properties in above arr 
  arr.name = "Enum";
  arr.gender = "Male";
this will be stored as how obj stores its property i.e, as key value 
 
 0: 10,
 1: 20,
 2: 30,
 3: 40
 name: "ENUM",
 gender: "Male"

for (let index in arr){
    console.log(index); // 0, 1,2,3, name , gender
}
so for-in loop prints name and gender too as index of arr , but we know index of arr can't be string this is why we should not use for-in loop with arr
*/