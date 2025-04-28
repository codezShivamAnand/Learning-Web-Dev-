function greet(){
    console.log("hi");
};
/*
// parameter 
function add(number1, number2){
    console.log(number1+number2);
};

// function call 
add(3,4);

// Multiply 

function mul(number1, num2){
    return number1*num2;
};
let res = mul(4,5);
// console.log(mul(4,5));
console.log(res);

// function stored in a variable 
const fun = function(){ // function is stored in heap , fun in stack 
    console.log("aur kya chal rha");
    return "money";
}
console.log(typeof fun); // function 
console.log(fun); //[Function: fun]
console.log(fun()); // prints the functino inside 

*/

/*
// Arrow function
const fun = ()=>{
    console.log("learning arow funct");
}
console.log(fun);
fun();

const sum = (num1, num2)=>{
    return num1+num2;
}
console.log(sum(3,4));

const sum1 = (num1, num2) => num1+num2;
console.log(sum1(3,4));

// const cube = function(num){
//     return num*num*num;
// }
// or using arrow funciton 
// const cube = (num)=> num*num*num;
const cube = num => num*num*num; // when single para we dont need to even put the parameter in a bracket 
console.log(cube(2));


// no of parameter is not sure kitna hai using rest opr{ek ek kar ke data aa rha hai usko array ke form me karna ho to } 
const sum2 = (...num) => {
    // for loop laga kar sum nikal skte hain 
    console.log(num);
}
sum2(2);
sum2(2,3,4);
sum2(5,6,9,4,2);
*/

// difference spread and rest opr 

// spread -> arr ke andar ke vakues ko spread karna hai 
// let arr = [2,4,[5,7,9],6];
// let arr1 = [...arr];
// console.log(arr1); 

/*
// Obj as function parameter 
let obj = {
    name : "rohit",
    age : 30,
    bank : "bob"
}
function fun(obj1){
    console.log(obj1.name, obj1.age);
}
fun(obj);
//destructured obj can be passed as function args , when we r required only specifc properties 
function fun1({name, age}){
    console.log(name, age);
}
fun1(obj);
*/