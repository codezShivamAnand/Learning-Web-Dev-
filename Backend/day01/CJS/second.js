console.log("hello, this is second");
function sum(a,b){
    console.log(a+b);
}
// sum(4,5);

function sub(a,b){
    console.log(a-b);
}
// // module.exports = sum;
module.exports = {sum, sub}; // sum : sum, sub:sub
// console.log(module.exports); // empty obj 
// module.exports.sum = sum;// obj.key = value
// module.exports.sub = sub;
