const obj= {
    0 : 20,
    1 : 10,
    name : "Shiv",
    account_number:42434,
    age : 20,
    "gender": "male",
    // insta id :  // keys format me no space 
    // string ke tarah pass karna hoga if u want to give space to keys
    "insta id" :  "shivam",  // can be accessed only through square bracket

    undefined : 30,
    null : "mohan"
}

/*
// keys are stored as strings in backend like how gender is written 
console.log(obj.gender);
// console.log(obj."gender"); // wrong way 
// . operation ke saath we cant call the keys jo ki strings me like hain 
console.log(obj.name);

console.log(obj["name"]);
console.log(obj["gender"]); // square backet ke andar as a string hi pass karna hoga 
// console.log(obj[gender]); // WRONG
// console.log(obj[insta id]); // wrong
console.log(obj["insta id"]);
// console.log(obj.insta id ); // wrong 
 
// keys as numbers can be accessed only through [] either as string or as number inside [] 
console.log(obj["0"]);
console.log(obj[1]);
// this is same as array -> array ka implementation is through obj 
console.log(obj);

// undefined and null ka accessing 
console.log(obj.undefined, obj[undefined], obj["undefined"]);
console.log(obj.null, obj[null], obj["null"]);
*/

/*
// array arr ka implementaion through obj arr1
const arr = [20,30,40];
const arr1 = {
    0: 20,
    1: 30,
    2: 40,
    length: 3
}
console.log(arr[0],arr1[0]);
console.log(arr.length, arr1.length);
console.log(typeof arr, typeof arr1);
*/
// ====================================================object create 2nd way
/*
const person = new Object();
console.log(person);

//property add
person.name = "Shivo";
person.age = 40;
person.gender = "Male";
console.log(person);

// delete 
delete person.age;
console.log(person);

//update 
person.name = "Mogn";
console.log(person);
*/

// ---------------------------------------------------------third method -> using class 
class People{
    constructor(na, ag, gen){
        this.name = na;
        this.age = ag;
        this.gender = gen;
    }

}
let per1 = new People("Shiv", 20, "Male");
let per2 = new People("Ana", 10, "female");

console.log(per1, per2);


let obj1 = {
    age : 30,
    acc_no : 345,
    gender: "Male"
}
// keys , values 
const arr = Object.keys(obj1);
const arr1 = Object.values(obj1);

console.log(arr, arr1);
// keys : values
const arr2 = Object.entries(obj1);
console.log(arr2);

/*
// Assign use case : combine arrays into one and assign into a new array  
let obbj = {a:1, b:2};
let obbj2 = { c:3, d:4};
                    // {} : is target jaha changes reflect hoge , obbj and obbj2 sources 
const obbj3 = Object.assign({}, obbj, obbj2);
console.log(obbj3, obbj, obbj2);
const obj5 = Object.assign({},obbj, obbj3);
console.log(obj5);
// spread opr  : The spread operator creates a new object, ensuring immutability.
const merged = {...obbj,...obbj3};
// console.log(merged);
*/

// Both Object.assign() and the spread operator are used for copying or merging objects, but they have some key differences.

// 1. Syntax Difference
// Object.assign(target, source) merges properties into the target object.
// Spread (...) is shorter and cleaner.


const first = { a: 1, nested: { b: 2 } };
const sec = { ...first }; // Shallow copy

first.a = 4;
sec.a = 3;
sec.nested.b = 10;
console.log(first); // { a: 4, nested: { b: 10 } }
console.log(sec);// { a: 3, nested: { b: 10 } }

first.nested.b = 15; 
console.log(first); // { a: 4, nested: { b: 15 } }
console.log(sec); // { a: 3, nested: { b: 15 } }

// -----------------Assignment opr , simply refernces all levels 
// const first = { a: 1, nested: { b: 2 } };
// const sec = first;

// first.a = 10;
// first.nested.b = 14;
// sec.nested.b = 15;
// console.log("first", first);
// console.log("sec", sec);
