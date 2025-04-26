const {sum, sub} = require("./second") // CGS: common js module.
// 

// IIFE: implementation of require 

// (function(){
//     console.log("hello, this is second");
//     function sum(a,b){
//         console.log(a+b);
//     }
//     sum(4,5);
// })();

sum(3,4); // ReferenceError: sum is not defined
sub(4,5);
console.log("Learning Backend, this is first");

// to get second.js module(file) into my first.js
// either import, but here in backend we use 'require'