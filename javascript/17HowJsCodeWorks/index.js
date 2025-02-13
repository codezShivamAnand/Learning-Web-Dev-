/*
console.log(x); // undefined
console.log(y);//ReferenceError: Cannot access 'y' before initialization
console.log(z); // ReferenceError: z is not defined
let y = 20;
var x = 10;
*/
/* hoisting : just a theoritical concept 

// varaibale and function declared by defualt at top part 
// flow of the below code 
    // 1.
// let z : 
// var x : undefined 
// let y :
 
// 2.
    // undefined 
    // z = 50;
    // error y is not initialied 
    // x = 10;
    // y = 20;
    // print z : 50
    // print x : 10
    // print y : 20

console.log(x); 
let z = 50;
console.log(y);
var x = 10;
let y = 20;
console.log(z);
console.log(x);
console.log(y);

*/

greet();
function greet(){
    console.log("hello");
}

//1. Memory execution 
// greet : function code 
// 2. code execution
//   greet()

/*
meet(); // ReferenceError: Cannot access 'meet' before initialization
let meet = function(){
    console.log("meet");
}
//1. Memory execution 
// meet :  
// meet will be empty since its a let and let is in temporal dead zone during first time memory execution
// 2. code execution
// meet(); error
*/
meet1(); // ReferenceError: Cannot access 'meet' before initialization
var meet1 = function(){
    console.log("meet");
}
//1. Memory execution 
// meet :  undefined 
// meet will be empty since its a let and let is in temporal dead zone during first time memory execution
// 2. code execution
// meet();TypeError: meet1 is not a function, cz undefinded cant be function 