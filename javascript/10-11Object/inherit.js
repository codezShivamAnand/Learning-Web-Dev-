let obj1 = {
    name : "rohit",
    age : 20
}
let user2 = {
    amount : 34,
    money : 4343
}
// user2.__proto__ = obj1;  // prototype : user2 inherited obj1 
// console.log(user2.__proto__);
// console.log(user2.amount);
// console.log(user2.name);
user2 = Object.create(obj1);
console.log(user2.__proto__);
console.log(user2.amount);
console.log(user2.name);
// console.log(user2.__proto__ == obj1);

let arr = [20,30,40,50,10];
// console.log(arr.__proto__ == Array.prototype);
// console.log(arr.__proto__.__proto__== Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__== null);
