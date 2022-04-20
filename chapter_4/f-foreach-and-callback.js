// passing in a funcation as an argument
// the funcation we put in is called a callback functaion.
// and in some point in another function. 
// that callback functaion will probably be called and maybe pass value
// which we can take in. 


const fMyFunc = callBackFunc => {
    // do sth
    let fVal = 50;
    // call the callback function
    callBackFunc(fVal);
};

// when we invoke fMyFunc, 
// we need to pass in a functaion as a parameter.
// we define this callback funcation in there. 
fMyFunc(function (val) {
    console.log(val);
});

fMyFunc(val => console.log(val));


// foreach
let fPeople = ["Karen", "Mike", "Kai", "Jingyu", "Shaun"];

fPeople.forEach(function (person) {
    console.log(person)
});

console.log("using an arrow funcation.......")
fPeople.forEach(person => console.log(person));

fPeople.forEach((person, index) => console.log(index, person));


// we can define a callback funcation and pass it in any methods
const fLogPerson = (person, index) => console.log(`${index} - hello ${person}`);
fPeople.forEach(fLogPerson);

// callback funcation is a normal funcation that we pass into another functaion or method as an argument.