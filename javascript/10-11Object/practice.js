// 1st method 
/*
const customer = {
    0 : 10,
    1 : 30,
    name : "Shiv",
    age : 20,
    "gender" : "Male",
    "bank account_no": 2389464,
    undefined : 20,
    null : "this is null",
    address : {
        city : "Haji",
        state : "Bihar"
    }  
}
console.log(customer);
console.log(customer.name);
console.log(customer.gender);
// console.log(customer.bank account_no); // wrong way access 
console.log(customer["bank account_no"]); // correct way to access keys with space 

// Acessing using square brackets
console.log("gender", customer["gender"]);
console.log("name", customer["name"]);
// console.log("name", customer[name]); ReferenceError: name is not defined
console.log(customer["address"]);
// in case of numeric keys, both works as shown below  
console.log(customer['0']);
console.log(customer[1]);

// accessing undefined in various ways 
console.log(customer.undefined, customer["undefined"], customer[undefined]);
console.log(customer.null, customer["null"], customer[null]);

*/
// ============================================= 2nd method : using new keyword =======================================
/*
const person = new Object(); // empty obj created named person
console.log(person);

// add properties 
person.name = "Ana";
person.bank_balance = 3435;
person.comapny = "xyz";

console.log(person, "old balance : ", person.bank_balance);
//modify 
person.bank_balance = 4647;
console.log(person, "new:", person.bank_balance);

// delete 
delete person.age ;
console.log(person, person.age);

*/

//========================================= 3rd method : using class
/*
class employee{
    constructor(na, ag, gend){
        this.name = na;
        this.age = ag;
        this.gender = gend;
    }
}

let emp1 = new employee("John", 21, "Male");
let emp2 = new employee("doe", 51, "Male");
console.log(emp1);
console.log(emp2);
*/

//==========================================================
            // Assign or merging two obj into one 
let obj1 = {
    a:1,
    b:2,
    c: "male",
    bank:{
        name:"bob",
        branch:"haji"
    }
}
let obj2 = {
    d:13,
    e:23,
    f: "female",
    add:{
        city:"bp",
        state:"Mp"
    }
}

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

const obj4 = {...obj1,...obj2,...obj3};
console.log(obj4);

//====================================================================

