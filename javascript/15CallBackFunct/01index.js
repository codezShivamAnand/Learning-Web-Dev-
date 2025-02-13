// for of loop : to get access over values
/*
const arr = [10,20,30,400];
for(let value of arr){
    console.log(value);
}
let str = "Hi this is me shivam";
for(let value of str){
    console.log(value);
}

// don't use for of loop in objects cz obj is not iterable 

const obj= {
    name : "chavvi",
    age: 21,
    gender: "female"
};
// for(let value of obj){
//     console.log(value); // TypeError: obj is not iterable
// }

// if we want to iterate over obj 
for(let value of Object.values(obj)){
    console.log(value);
}
for(let value of Object.keys(obj)){
    console.log(value, obj[value]);
}

*/

// forEach : exoects a call back fun as argument 

let arr = [10,20,30,40];
// arr.forEach(function(num){
//     comsole.log(num);
// })

// single argument : number 
// second argument : index
// third argument : array ko bhi pass kar skte 

function greet(num){
    console.log(num);
}
arr.forEach(greet);
// arr.forEach( (num, index, ar) => {
//     ar[index] = num*2;
// })
// console.log(arr);

// note : both filter and forEach loop 
//     1. select values from arr 
//     2. excecute the function written inside them on that value
// ============================================= FILTER

let arr1 = [10,22,33,41,45,38];
// const res = arr1.filter((num) =>{ //filter expects call back function, can take upto 3 argument in same as forEach loop
//     return num%2==0; // returns true or false 
// })

const res = arr1.filter((num) => num%2==0 );
console.log(res);

// REAL WORLD IMPLEMENTAION OF FILTER : OUT OF ARRAY OF STUDENTS OBJECT, select those whos marks greter than 50
const students =[
    {name: "Rohan", age: 22, marks : 70},
    {name: "Mohan", age: 24, marks : 80},
    {name: "Dixi", age: 25, marks : 30},
    {name: "Doe", age: 28, marks : 40},
    {name: "Doe", age: 31, marks : 90},
]
// const result = students.filter((obj)=>{
//     return obj.marks>50
// });    // or 
// const result = students.filter((obj)=>obj.marks>50);
// or
const result = students.filter(( {marks} )=> marks>50); // destructuring of obj to its property marks  

console.log(result);

//==================================== MAP ==========================
/*
// modify kar skte apne array ke values ko , the modified values/ arrays will be done in a new array result 
const arr2 = [1,3,4,5,7,6];
// const resultt = arr2.map((num) =>{
//     return num*num;
// })
const resultt = arr2.map((num) => num*num); 
const resultt1 = arr2.map((num,index) => num*index); 

console.log(resultt, resultt1);

*/
// Question : return the (even numbvers square )/2;
const aRR = [1,2,3,4,5,6];
const ansAr = aRR.filter((nums) => nums%2 == 0 ).map((num)=> num*num).map((num)=> num/2);
console.log(ansAr);