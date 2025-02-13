// non primitive datatype : Arrays, obj, function 
/*        (1)
//ARRAY
let arr = [10,20,30, "rohit", "mohit"];
console.log(typeof arr); // object 

//OBJECT-> ek type ka data ek saath rhe toh obj use kar lo 

let obj = {
    //  Key   :  value       pair 
    user_name : "rohit",
    acc_number : 321435889,
    balance : 10023
}
console.log(obj); // { user_name: 'rohit', acc_number: 321435889, balance: 10023 }
console.log(typeof obj); // object

// FUNCTION 
let fun = function() {
    console.log("hello, world");
    return 10;
}
fun(); // function call
console.log(fun());
console.log(typeof fun);// function
*/

//---------------- TYPE CONVRSION --------------------(2)----------------------------------------------------

let acc_number = "129684";
// convert acc_number(string) to number 
let num = Number(acc_number);
console.log(typeof acc_number); // string
console.log(typeof num); // number

// boolean convert to number 
let p = true;
console.log(Number(p)); // 1

let account = "1296xs";
console.log(Number(account)); // NaN: not a number 

let bal = "200s";
console.log(Number(bal));

// null ka conversio to number gives 0 
let x1 = null;
console.log(Number(x1)); // 0

// Undefined conversion to number -> NaN
let x2;
console.log(Number(x2));//NaN

// Conversion to string: 
let ab = 20;
console.log(String(ab)); // 20
console.log( typeof String(ab)); // string

let ax = true;
console.log(String(ax)); // true
console.log(typeof String(ax)); // string 

//conversion to BOOlean 
let abc = "23343dfg";
console.log(Boolean(abc));
let abcd = ""; // empty string -> Boolean will give false 
console.log("abcd:"+Boolean(abcd));
let abcde = " ";// not an empty string
console.log("abcde:"+Boolean(abcde));

// operator 
console.log(3+4-19);
// Rule 
// left to Right 
// Divide & Multiply 
// Add & sub 
console.log(6*3+18/6-9);
        // 18 + 3 - 9 = 21- 9 = 12
        // better to use brackets 
// Modulus operaor 
console.log(20%3);

// pre increment sum++ 
// post decrement sum--
let sum = 20;
let updated = sum++; // post increment -> first assign then increase 
console.log(updated); // assigned 20 
console.log(sum); // increased to 1 = 21
updated = sum--;
console.log(updated); // assigned 21
console.log(sum); // 20

updated = --sum;  // predecrement -> first dec then assign 
console.log(updated); // 19
console.log(sum); // 19
updated = ++sum;
console.log(updated); // 20
console.log(sum); // 20

// Assignment operator 

let x = 20;
// x = x+10;
x +=10;
console.log(x);

let y = 30;
y /= 10;
console.log(y);
let z = 40;
z*=2;
console.log(z);
