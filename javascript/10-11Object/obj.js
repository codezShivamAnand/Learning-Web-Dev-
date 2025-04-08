/* // INHERITANCE 
const parent = {
    name: "Abcd",
    age: 39, 
    greet: function(){
        console.log("hello, I am parent");
    }
}

const child = {
    name: "bcd",
    age: 19, 
    meet: function(){
        console.log("hello, I am child");
    }
}

// set prototype of child to parent
//child.__proto__ = parent; // child will have the properties of parents 
        // OR 
// we can use modern way to set prototype 
Object.setPrototypeOf(child,parent); 
// to get prototype 
const proto = Object.getPrototypeOf(child); 
console.log(proto);
    // OR 
//console.log(child.__proto__);

// Create a new obj with a  specified prototype object and optional properties
// Object.create(proto-Obj, [propertiesObject]);
// proto-Obj: The object which should be the prototype of the newly created object.
const child2 = Object.create(parent);

const proto1 = Object.getPrototypeOf(child2); 
console.log(proto1);

// Add properties to the new obj child2
child2.name = "dce";
console.log(child2.name); // its own property 
child2.greet();// inherited from parent 
*/

// let arr = [20,30,40,50,10];
// const protoof_arr = Object.getPrototypeOf(arr); 
// console.log(protoof_arr); // []

// const protoof_Array = Object.getPrototypeOf(Array); 
// console.log(protoof_Array); // {}

// const protoof_Object = Object.getPrototypeOf(Object); 
// console.log(protoof_Object); 

    //or 
// console.log(arr.__proto__); // Array []
// console.log(Array.__proto__); // Object {}
// console.log(Array.__proto__.__proto__); // null 

/* Inherited 
    arr <- Array <- Object
 */

// -----------=============================---------------------------==============================------------------------=================================
/*
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
// Access property 

// . dot operation 
    // limitation -> string keys with spaces cant be accessed  
// console.log(obj.name);
// console.log(obj.gender);
// console.log(obj.null);

// console.log(obj.insta id); wrong

// square brackets limitation -> keys must be passed as string inside square bracket
// console.log("KEYS");
// console.log(obj["gender"]); 
// console.log(obj["insta id"]);

// if key is null or undefined or numeric keys, then it doesnt necessarily need to be passed as a string 
// console.log(obj[null]);
// console.log(obj[0]);

// console.log(obj["age"]);

// delete property 
delete  obj.name;
delete  obj[0];
console.log(obj);
*/

/* // ================ 2nd of making obj ============
// using new Keyword 
const person = new Object();
console.log(person); // {} empty obj 

// add properties 
person.name = "Shiv";
// person.age = 30;
person[1] = 10;
person["age"] = 20;
console.log(person); //{ name: 'Shiv', age: '30' }

// delete property 
delete person.age;
delete person[1];
console.log(person); // { name: 'Shiv' }
*/

// ================ 3rd way of making obj using Class ============
class People{
    constructor(na, ag, gen){
        this.name = na;
        this.age = ag;
        this.gender = gen;
    }

}
let per1 = new People("Shiv", 20, "Male");
console.log(per1);



/* // Some inbuilt methods 
let obj1 = {
    age : 30,
    acc_no : 345,
    gender: "Male"
}
// keys , values 
const arr = Object.keys(obj1);
const arr1 = Object.values(obj1);
console.log(arr); // array of keys 
console.log(typeof arr); // object cz arr is internally an obj 

const arr2 = Object.entries(obj1);
console.log(arr2);
*/

 
const obj1 = {a:1};
const obj2 = {b:2};
const obj3 = {c:1, info: {d:4,e:5} };
const obj4 = {a:1};

// Object.assign-----------------------------
/*
const clone = Object.assign({}, obj1, obj2);
console.log(clone);

// .assign()-> shallow copy of nested obj and deep copy for non-nested obj 
clone.a = 20; // deep copy 
console.log(clone, obj1);

const merge = Object.assign({}, obj3);
// console.log(merge, obj3);
merge.info.e = 15; // shallow copy-> changes reflected in both 
console.log(merge, obj3);
*/

//SPREAD OPR ==-------------------
// Spread opr can be used for array, obj, maps or any iterable 
// created a new obj 
const cloned = {...obj4};
// console.log(cloned);

const first = { a: 1, nested: { b: 2 } };
const sec = { ...first }; // Shallow copy of nested obj 
// console.log(sec);

// Non-nested properties ka deep copy 
sec.a = 10; // only change in sec.a 
// Nested obj ka shallow copy 
sec.b = 20; // chnages in sec and first b 
// console.log(sec, first);

const arr = [2,4,5,["hii", 10,20]];
const arr9 = [24,55,"shiv",];

const clonedArr = [...arr, ...arr9];
console.log(clonedArr);

clonedArr[3][2] = 99; // Shallow copy 
console.log(clonedArr, arr);


// Assignment opr, simply refernces all levels ==-----------------
const one = { a: 1, nested: { b: 2 } };
const sec = one;
// shallow copies hi banata hai saare levels ka
one.a = 10;
one.nested.b = 14;
sec.nested.b = 15;
console.log("first", one);
console.log("sec", sec);
