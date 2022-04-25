console.log("-----------------------------------");

// primitive: numbers, strings, booleans, null, undefined, symbols
// reference types : all types of objects, object literals, arrays, functions, dates, all other objects

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne:${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne:${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference 
userOne = { name: "kai", age: 30 };
userTwo = userOne;
userOne.name = "Karen";
console.log(userOne, userTwo);


