// length
const arr = [2,3,44,"Shiv", true, "hi", 3];
// console.log(arr.length);
// Accessing 
// console.log(arr[3]);
// console.log(arr.at(4)); // at takes neg index 
// console.log(arr.at(-1));

// const newarr = arr; // both referencing the same address 
// console.log(newarr == arr); // both storing add of the same location
// const newarr1 = structuredClone(arr); // copy arr to new location amd newarr points to new copy 

// push : add element at end 
// arr.push(2);
// arr.push(40);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// unshift : add element at start 
// arr.unshift(10);
// arr.unshift(55);
// console.log(arr);

//shift : delete element from start
// arr.shift();
// console.log(arr);

// delete operation 
// delete arr[0]; // creates hole at index 0
// console.log(arr); // arr = [hole, 2, 3, 44, 'Shiv', true ]

// indexOf(element) : first occurance of element 
// console.log(arr.indexOf(2)); 
// lastIndexOf(element)
// console.log(arr.lastIndexOf(2));
// includes() : check if an element exists 
// console.log(arr.includes(10));

//slice(i, j) : i to j-1
// console.log(arr);
// console.log(arr.slice(1,3));

//splice(i,j) : returns j elements starting from i or we can say, ith index se total j index return karo   
// splice does changes to original arr
// console.log(arr);
// console.log(arr.splice(2,4)); // 2nd index se 4 elements
// console.log(arr);
// splice(starting_index, totoal_element_delete,add value just after jaha tak delete ho rkha hai )
// arr.splice(2,3, "money");
// console.log(arr);
// arr.splice(2,0, "not delete"); // 0 means no element to delte so next value will be added just after 2nd index
// console.log(arr);

// toString()
// console.log(arr.toString());
// console.log(typeof arr.toString());

// join same as toString , gives the flexibility to add something between the strings 
// console.log(arr.join("+"));
// console.log(arr.join(" "));
// console.log(arr.join(" 0 "));


// Concat 
let arr1 = [2,35,6,11];
let arr2 = [5,7,9,"rami"];
let arr3 = ["HI", true, 90, 12];
let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[1]);
// console.log(arr1[4]);
// console.log(arr1[4][1]);

// 2-d array 
let arr2d = [[2,4,6],[9,"hi",8],[8,"hi",1]];
console.log(arr2d[0]);
console.log(arr2d[0][2]);

// flat : to convert into 1-d array 
let newarr = arr2d.flat(); // or flat(1)
console.log(newarr); 
// 3d-array
let arr3d = [[2, [3,5,6]],[4,6]];
// console.log(arr3d[0][1][1]);
// console.log(arr3d.flat(1)); // ek level abstraction ends 
// console.log(arr3d.flat(2)); // 2 level abstraction ends 

// flat(Infinity); saare level ko khol deta hai untill 1d array mein convert na ho jaye 
console.log(arr3d.flat(Infinity)); 

// Array.isArray(var_name); // returns true if array 
let abc = [2,1,3,4];
console.log(Array.isArray(abc));


// ANother way of creating array : Not recommended 
let ac = new Array (2,434,54,6);
console.log(ac);
let acd = new Array(10); // when single value , assumes it as array length 
console.log(acd.length);
