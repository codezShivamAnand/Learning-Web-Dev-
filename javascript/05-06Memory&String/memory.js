// Primitive Datatype are immutable i.e, they can't be changed. 
// Also they are directly stored in stack memory.
let a = 10;
let b = a;
b = 30; // copy of a is stored in b so, changes in b will not reflect in a
console.log(b);
console.log(a);

// primitive data type vs non primitiletve
let obj1 = {
    id : 220,
    naming : "rohit"
}
let obj2 = obj1; // obj2 stores the address of obj1 , reference copy hui hai na ki actual values 
console.log(obj1); // { id: 220, naming: 'rohit' }
console.log(obj2);

obj2.id = 30;//  changes in obj2 reflects in obj1 but this same is not in primitive 
console.log(obj1); // { id: 220, naming: 'rohit' }
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

// let obj3={
//     id : 20,
//     money : 300
// }
// obj = obj3; // address in obj is getting replaced by obj3 value(which is also an address) , which is not possible cz obj1 is const 