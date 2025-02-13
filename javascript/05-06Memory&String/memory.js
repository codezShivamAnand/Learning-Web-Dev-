let a = 10;
let b = a;
b = 30;
console.log(b);
console.log(a);

// primitive data type vs non primitiletve
let obj1 = {
    id : 220,
    naming : "rohit"
}
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.id = 30;//  changes in obj2 reflects in obj1 but this same is not in primitive 
console.log(obj1);
console.log(obj2);

const num = 10;
// num = 20; // cz num is constant 
console.log(num);

//NOn prim datatype -> allows change in keys even if the var is const 
const obj = { // obj stores the address of memory location where id and balance stroed in heap, which remains const still 
    id : 20,
    balance : 200
}
// let say address stored in obj is 1682 i.e, obj = 1682 
obj.id = 11;
console.log(obj);

let obj2={
    id : 20,
    money : 300
}
obj = obj2; // address in obj1 is getting replaced by obj2 value , which is not possible cz obj1 is const 