// Objects in JS have properties & things they can do (methods)...

// object literals : key - value pair
let auser = {
    name: "Karen",
    age: 28,
    email: "karenkang@gmail.com",
    location: "PA",
    blogs: ["Why mac & cheese rules", "10 things to make with marmite"]
};

console.log(auser);

// access objects properties by using dot notation
console.log(auser.name);

// override values by using dot notation
auser.age = 30;
console.log(auser);

// access / override properties using []
console.log(auser["name"]);
auser["email"] = "kang945@gmail.com";
console.log(auser["email"]);

// this way cannot used in dot notation
const key = "location";
console.log(auser[key]);

// object type
console.log(typeof(auser))