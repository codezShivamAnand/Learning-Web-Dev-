// Global obj is a obj
// chrome : window 
// nodejs : global

/*
// globalThis was introduced to point global obj irrespective of environment 

// globalObj ko dot laga kar access karne ki jarurat nhi hai , 
console.log("hi");
global.console.log("hi");
// above both are same
// below two are same too
function greet(){
    console.log("hi greet");
}
setInterval(greet, 5000);
global.setInterval(greet, 5000);

*/
//========================================================  this keyword   =============
// look for these outputs in the broweser of second.html -> insecpt mode > console 
/*
console.log(20);
console.log(this); // in browser points is same as window 
// console.log(this === window ); // true 

let a = 10;
const b = 20;
// let and const global scope ka part toh hai but not globalObject ka part 
var c = 30;
// global obj ka part hota hai var 

console.log(c);
console.log(a);

*/
// 1. This keyword in GLOBAL CONTEXT (outisde any function)
// in browser: window 
// in Node.js : Modules's exports object
// console.log(this);//in node.js , outputs : {}

// 2.Inside a function 
// a: (Non strict mode)
// function greet(){
//     console.log(this);
// }
// greet();
// when this is used inside a function it still points to global object 
// b: (strict mode )
// "use strict"
// function greet(){
//     console.log(this);
// }
// greet();
// "use strict"
// a = 10;
// console.log(a);

// let obj = {
//     name : "rohit"
// }
// Object.freeze(obj);
// obj.name = "sohan";
// console.log(obj.name);

// 3: Inside a method(Object context)
/*
"use strict"
const obj = {
    name: "Rohit",
    age : 20, 
    greet: function(){
        console.log(this.name); // this keyword inside a function of an Object refers to the obj , thats why this.name prints name in the obj 
    }
}
obj.greet();
*/
//===================================================================
// timestamp : 45:00
// 3. Arrow function dont have their own this 
const obj = {
    name: "Rohit",
    age : 20, 
    greet: ()=>{ // greet funvtion has global scope so this keyword inside this will inherit property of global scope this
        console.log(this); 
    }
}
obj.greet();

const obj1 = {
    name: "Rohit",
    age : 20, 
    meet: function (){
        let ab = () => {
            console.log(this);
            console.log(this.name);
        }
        ab();
    }
}
obj1.meet();

//=============================

// inside a constructor of a classs
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
let a = new Object("Rohit",20);
console.log(a);