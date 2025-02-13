// if-else 
/*
let age = 30;
if(age >= 18){
    console.log("eligible");
}else {
    console.log("Not eligible");
}
    */
// if- else if 
/*
let age = 37;
if(age < 18){
    console.log("kid");
}else if(age > 45){
    console.log("old");
}else{
    console.log("young");
}
    */
// Switch 
/*
// Multiple  condition : switch

// console.log(new Date().getDay());
// switch parameter strict check with case , using ===
// switch(exp){
//     case x: // exp === x ? then only case x lines excuted 

//     case y:

//     case z:

// }
switch(new Date().getDay()){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default :
    console.log("Not a valid day");
        
}

// loop 
for(let i = 0; i < 5; i++){
    console.log("iteration" + i);
    console.log("iteration", i);
}
let sum = 0;
for(let i = 0; i < 5; i++){ // every iteration mein i ke liye new spacce allocated and sum ke liye new space allocated too 
    sum+=i;
}
console.log(sum);
*/

// Nested for loop
// 12345
// 12345
// 12345
// 12345
// 12345

// for(let j = 0; j < 5; j++){
//     let result = "";
//     for(let i = 1; i <= 5; i++){
//         result +=i ;
//     }
//     console.log(result);
// }

// 12345
// 1234
// 123
// 12
// 1
// for(let j = 5; j >= 1; j--){
//     let result = "";
//     for(let i = 1; i <= j; i++){
//         result += i;
//     }
//     console.log(result);
// }

// 1  
// 12  
// 123  
// 1234  
// 12345  
// outer loop -> rows ko print karega : from 1 to 5
// inner loop from rows == column  

// for(let j = 1; j <= 5; j++){
//     let result = "";
//     for(let i = 1; i <= j; i++){
//         result += i;
//     }
//     console.log(result);
// }
//i = 1     *  2*1-1 = 1 
//i = 2    *** 2*2-1 = 3
//i = 3   ***** 2*3-1 = 5
//i = 4  *******  7
//i = 5 *********  9
// let n = 5;
// for (let j = 1; j <= n; j++) {
//     let spaces = " ".repeat(n - j); // for j = 2 there are 3 spaces in front 
//     let stars = "*".repeat(2 * j - 1);
//     console.log(spaces + stars); // concatinate
// }


// global scope : anyone can access 
/*
let a = 10;
var b = 20;
const c = 30;
function greet(){
    console.log(a);
    console.log(b);
    console.log(c);
}

for(let i = 0; i < 5; i++){
    return a+b+c;
}
*/
// local scope (functional scope) : function ke andr ane wale 
// function greet(){
//     let a = 20; /// can be accessed inside the funditon 
//     let b = 10;
//     let c = 30;
//     console.log("hello");

// };
// greet();
// console.log(a);// wrong 

// block scope : if ekse , for loop , var can be used out of the scope too 
if(true){
    let a = 10;
    var b = 20;
    const c = 30;
}
// console.log(a);
console.log(b); // can be accessed outside 
// console.log(c);

for(var i = 0; i < 5; i++){
    console.log("hi");
}
console.log(i); // i can still be accessed even outside the loop 
//cz its var , thus var doesnt follow block scope 

let amount = 20; // global scope  : amount 
if(true){
    let amount = 30; // block  scope : amount 
    console.log(amount);
}

// another prob with var 
console.log(xy); // variable xy is accessible evenn before declaration , even if the value is undefined 
var xy = 40;

greet(); // still can be printed , cz its a var 
function greet(){
    console.log("hello, greet");
}

greet();
// meet();
const meet = function(){
    console.log("hello, meet");
}
meet();

// while loop 
// do while loop 

const obj = {
    name : "rohit",
    age : 20,
    amount : 2324,
    city : "raj"
}
// const a = Object.values(obj);
// console.log(a);
// accessing the values of keys using for loops
const key = Object.keys(obj);
for(let i = 0; i < key.length; i++){
    console.log(obj[key[i]]);
}