let myScore = '100';

myScore = Number(myScore);
console.log(myScore + 1);

console.log(typeof(myScore));

let typeRes = Number('hello');
console.log(typeRes);

typeRes = String(50);
console.log(typeRes, typeof typeRes);


// positive/ negative numbers are considered a truthy value 
// 0 is false
let truthValue = Boolean(100);
console.log(truthValue, typeof truthValue);

let falsyValue = Boolean(0);
console.log(falsyValue, typeof falsyValue);

// string with any length are truthy
// empty string with no length is false
truthValue = Boolean('0');
console.log(truthValue, typeof truthValue);

falsyValue = Boolean('');
console.log(falsyValue, typeof falsyValue);


