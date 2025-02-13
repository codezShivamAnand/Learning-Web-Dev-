// print 
console.log("kii");
console.log(1+1);

//declare the variable 
let num = 10;
console.log(num);
num = 20;
console.log(num);

// let - > number(includes float and double), boolean, string, big int, null, undefined, symbol. This is stored in RAM 
let acc_bal = 40.4; // takes 64 bit 
console.log(acc_bal);
console.log(typeof acc_bal);//number

// string
let str = "shiv";
console.log(str);
console.log(typeof str); // string
let str1 = 'shiv'; // single quotation is also allowed 
console.log("str1: "+ str1); // + concatinate
console.log("str1Type : "  + typeof str1);

//BOOLEAN 
let statement = false;
console.log(!statement)
console.log(typeof statement);

//undefined 
let account;
console.log(account); // undefined
console.log(typeof account); // undefined 

let ab;
console.log(ab);
console.log(typeof ab);

ab = null;
console.log(ab);
console.log(typeof ab); // object



//NULL
let bal = null;
console.log(bal);
console.log(typeof bal); // object null is an error in javascript but we didint change cz of the legacy code in js is being written with null as obj 

//BIG INT -> stores numbers more than 64bit
let a = 3443783434893248724237849234n;
console.log(a);
console.log(typeof a);



// USING CONST-> constant means cant be changed once value is assigned , EX. bank account number is stored in const 
const number = 83
console.log(number);
// number = 23;
// console.log(number);//TypeError: Assignment to constant variable

//using var -> dont use it(OUTDATED) 
// dif between var and let -> discussed later why we r not using var in blocks and scope 
var age = 20;
console.log("age " + age);
age = 34;
console.log("new age " + age);
