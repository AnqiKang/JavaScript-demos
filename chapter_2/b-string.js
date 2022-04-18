// strings
console.log('Hello World');
console.log("Hello World");

let email = "XX@gmail.com";
console.log(email);

// String concatenation
let firstName = "Karen";
let lastName = "Kang";
let fullName = firstName + " " + lastName;
console.log(fullName)

// getting a single character from string by using [index]
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName);

let index = email.indexOf('@');
console.log(index)

// common string methods
let myEmail = "karenkang@vanagurd.com.usa";
let stringResult = myEmail.lastIndexOf('n');
stringResult = myEmail.slice(0, 9);
stringResult = myEmail.substring(4, 10);
stringResult = myEmail.replace('k', 'm') // only replace the first searchValue.

console.log(stringResult)



