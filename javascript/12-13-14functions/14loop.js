/*
Q. why we dont use for in loop for arrays?
 Ans. Arrays is an obj, and values of arrays actually stored like obj in key value pair 
 const arr = [10,20,30,40];
 // internally stored as 
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