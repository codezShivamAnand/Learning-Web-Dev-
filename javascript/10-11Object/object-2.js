let obj1 = {
    a:1,
    b:2
}
        //1. shallow copy : copied by reference 
/*
let obj2 = obj1;
console.log(obj2,  obj1);
obj2.a = 3;
console.log(obj2,  obj1);
// it is seen that when the a of obj2 is modified, it is also reflected for the old obj1 object. This can cause data inconsistency. This is known as a shallow copy. The newly created object has the same memory address as the old one.

// Hence, any change made to either of them changes the attributes for both. To overcome this problem, a deep copy is used.

// DEEP COPY : creates a completely independent copy of the object, including all nested objects or arrays. 
// This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely
let obj3 = structuredClone(obj1);
obj3.a = 20;
console.log(obj3,obj1);
*/
            //2.  Nested object
/* 
const user = {
    name : "rogiy",
    balance: 3435,
    address : {
        pin:1889,
        city : "bhopal"
    }
}

// console.log(user.address);
// console.log(user.address.city);

const user2 = Object.assign({}, user);
console.log(user2);
user2.name = "Mohit";
user2.address.city = "indore";
console.log(user);

// this shows , Assign : deep copy for main obj and shallow copy for Nested obj 
// this is why we use structuredclone where we want to create totally different copies 
*/

        //3. object.seal()
const person = {
    name : "Ram",
    age : 30,
    city : "bhopal"
}
Object.seal(person);
// console.log(person);

// modifying existing property in sealed obj is allowed 
person.name = "SHIV";
person.age = 20;
// console.log( "modified obj ", person);

// adding new property in sealed obj is not allowed
person.balance = 2345;
// console.log(person);

// deleting an existing property is not allowed 
delete person.name;
// console.log(person);

        //4. Object.isSealed() : used to check if an object is sealed
// console.log(Object.isSealed(person));


            //5. Object.freeze() : immutable obj 
            // Object.isFrozen() : returns true , if an object is frozen.

const person1 = {
    name: "John", age: 30
}
Object.freeze(person1);

person1.name = "muna"; // Modification : not allowed
delete person1.age; // deletion : Not allowed 
person1.balance = 23454; // addition : not allowed 

// console.log(person1, Object.isFrozen(person1));

// 6. DESTRUCTURING OF AN OBJ 

let obj = {
    name : "rohit",
    money: 454,
    balance: 56,
    age: 34,
    aadhar : "hdvfjh",
    address : {
        pin : 43455,
        city: "bhp",
        state : "up"
    }
}
// const{name, balance, age} = obj;
// console.log(name, balance, age);
// changed the variales names 
// const{name: full_name, balance: amount, age: umar} = obj;
// console.log(full_name, amount, umar);

// const{name,age,...obbj} = obj; // except name, age other property rests in obbj  
// console.log(name,age,obbj); //obbj returns in the format of object

// const arr = [3,4,5,6,4,6];
// const [ first, second, ,third] = arr;
// console.log(first,second,third);

// const[first, second, ...third] = arr; // third is the rest opr here 
// console.log(third);

// Destructring of nested obj 
// const {address: {pin, state}} = obj;
// console.log(pin, state);


// Destructring of Array
let obj8 = {
    name : "rohit",
    money: 454,
    balance: 56,
    arr5 : [30,40,20,80],
    age: 34,
    aadhar : "hdvfjh",
    address : {
        pin : 43455,
        city: "bhp",
        state : "up"
    }
}

// const { arr5: arr9} = obj8;
// const [first] = arr9;
// console.log(first);
    // or just squeeze in 1 steps 
const { arr5: [first1]} = obj8;
console.log(first1);

// Destructring of Function
/*
let user = {
    name : "ENUM",
    amount : 546467,
    greet : function(){
        return "hello greetings"
    },
    meet: function() {
        console.log(344)
    }
}
user.greet(); // nothing printed, the function greet returned hello greetings 
console.log(user.greet()); // prints hello greetings
user.meet(); // since the function has printing statement so on calling it prints inclusively 
console.log(user.meet()); //first user.meet() is executed and then since user.meet() is not returning anything so eventually its like cnsole.log(nothing);
*/

const user = {
    namex: "Alice", // Property
    age: 25,       // Property
  
    // Method to display user details
    getDetails: function () {
      return `Name: ${namex}, Age: ${age}`;
    },
  
    // Method to update the age
    updateAge(newAge) {
      this.age = newAge;
    },
  };
  
  // Access properties
  console.log(user.name);       // Output: Alice
  console.log(user.age);        // Output: 25
  
  // Call methods
  console.log(user.getDetails()); // Output: Name: Alice, Age: 25
  
  // Update property via a method
  user.updateAge(26);
  console.log(user.getDetails()); // Output: Name: Alice, Age: 26
  