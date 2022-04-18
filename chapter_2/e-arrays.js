// Arrays : to store collections of things.
let stringArr = ["Karen", "Kang", "Jojo"];
console.log(stringArr);

console.log(stringArr[0]);

// override values within an array
stringArr[0] = "Kai";
console.log(stringArr);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["Kai", 30, "Kang", 20];
console.log(random);

console.log(random.length)

// methods
let arrRes = stringArr.join('-');
console.log(arrRes);

let indexOfKang = arrRes.indexOf("Kang");
console.log(indexOfKang)

let concatRes = stringArr.concat(["Zheng", "Jingyu", 13])
console.log(concatRes);

// Appends new elements to the end of an array, 
// and returns the new length of the array.
let pushRes = stringArr.push("mike");
console.log(pushRes);


// Removes the last element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
let popRes = stringArr.pop();
console.log(popRes)