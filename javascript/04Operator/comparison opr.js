//number to number 
// let a1 = 1;
// let a2= 2;
// console.log(a1 == a2); // false
// console.log(a1 > a2);
// console.log(a1 < a2);
// console.log(a1 >= a2);
// console.log(a1 <= a2);

// let num = 10;
// let str = "10";
// console.log(num == str); // type conversion of str to num then comaprison 

// let a1 = 10;
// let str1= "20";
// console.log(a1 <= str1);
// let str2= "20x";
// console.log(a1 <= str2); // Number(str2) is NaN so no comparison so the result is false


// === type check then compare value 
// let a2 = 30;
// let a3 = "30";
// let a4 = 30;
// console.log("x", a2 === a3);
// console.log(a2 === a4);

// null and undfefined 

console.log(null == undefined); // true ; // null can only be equiv to undefined i.e, sirf iss case me rule defined hai ki yha type conversion nhi hoga , baaki har comaprison operator will do type conversion first.
console.log(null === undefined); // false 
// console.log(null == a2); // false 
console.log(null == 0); // false 
console.log(null > 0); // 0 > 0 ? 
console.log(null < 0); // 0 < 0 ? 
console.log(null >= 0); // 0 >= 0 ? true
console.log(null <= 0); // 0 <= 0 ? true
// >,<, >= , <= all these type convert first then compare so, null to Number is 0 .

// UNdefined comparison
/* 
console.log(undefined == 0); // false
console.log(undefined > 0); // NaN > 0 ? False
console.log(undefined < 0); // NaN < 0 ? False
console.log(undefined >= 0); // NaN >= 0 ? False
console.log(undefined <= 0); // Nan <= 0 ? False
*/
// NaN comapriosn 
/*
console.log(NaN == NaN);
let st3 = "rohit";
let st4 = "mohiy";
console.log(Number(st3));
console.log(Number(st4));
console.log(Number(st3) == Number(st4));
*/
let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1 == abc2 == abc3);//( True == abc3 ) eventually this

console.log(undefined != null); // false

//LOGICAL OPR
/*
let age = 18;
let money = 420;
console.log(age >= 18 && money > 200);
console.log(age < 18 || money > 200);
console.log( !(age>10) );
*/

// BITWISE OPR 
console.log( 4&5 );
console.log( 11&14 );
console.log( 11 | 14 );
console.log( 5^7 );  // 2
console.log( 5 << 3); //LEFT SHIFT, 5 multiply by 2 power 3
console.log(20 >> 2); // RIGHT SHIFT , 20 divided by 2 power 2 

