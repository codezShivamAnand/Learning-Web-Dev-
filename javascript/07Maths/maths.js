let num1 = 231;
let num2 = new Number(231);
let num3 = new Number(231);
console.log(num1);
console.log(num2);
console.log(typeof num2);
// memory allocated in Heap means typeof will be object 
console.log(num1 == num2); // Num-obj comparison, num2 will convert to Number then comaprison 
console.log(num2 == num3); // obj-obj cmparison 

//2. toFixed(decimal ke baad kitne digit tak)
// let num = 231.56;
// console.log(num.toFixed(2));
// console.log(num.toPrecision(4));
// console.log(num.toPrecision(2)); // 2.3e^2 
// console.log(num.toExponential(2));
// console.log(num.toExponential(3));
// console.log(num.toString());
// console.log(num.valueOf());

// Math -> is an obj too
// console.log(Math.E); // E is loge wala 
// console.log(Math.LN10); // log base e power 10 e^x = 10; x = 2.302585092994046;
// console.log(Math.PI);

// floor and ceil
// let num10 = 23.1;
// console.log(Math.floor(num10)); // int just on the left on number line 
// console.log(Math.ceil(num10)); // GIF value

// random() : generates random values between : 0 <= value < 1
console.log(Math.random()); 
// we can take adv. of this fact for generating numbers between 0 - 9
console.log(Math.floor(Math.random()*10 ));

// Generate values : 1-10
console.log(Math.ceil(Math.random()*10 ));
// or 
console.log(Math.floor(Math.random()*10 ) + 1);

// 11-20
console.log(Math.floor(Math.random()*10 ) + 11); // 0-9 + 11 = 11 - 20

// random numbers between any two values min and max 
// min = 40 max = 50;
//console.log(Math.floor(Math.random()*(max-min+1)) + min);

// 0-9
console.log(Math.floor(Math.random()*10 ));
// 0-10
console.log(Math.floor(Math.random()*11 ));
// 20-30
console.log(Math.floor(Math.random()*11 +20 ));

// ludo

// 1-6 numbers generated 
console.log(Math.floor(Math.random()*(6-1+1)+1 ));





