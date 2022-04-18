let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators : + - * / ** % reminder
console.log(10 / 2);
let numResult = radius % 3;
numResult = pi * radius ** 2;


console.log(numResult);

// order of operation 
// - B(brackets) I(indices) D(division) M(multiplication) A(addition) S(subtraction)
let complexMathResult = 5 * (10 - 3) ** 2;
console.log(complexMathResult);

let likes = 10;
likes = likes + 1;
likes++;
likes += 10;
console.log(likes)

// NaN : not a number
console.log(5 / "hello")

// concatenation with numbers and strings
let example = "the blog has " + likes;
console.log(example)

