// variables are defined in root of document. global scope
// there can be accessed in anywhere in the file. 
let hAge = 30;

if (true) {
    // local scope
    let hAge = 50;
    let hName = "Karen"
    console.log("insode 1st code block: ", hAge, hName);

    if (true) {
        let hAge = 70;
        console.log("inside 2nd code block: ", hAge, hName);

    }
}

// cannot use local scope variables outside block
console.log("outside code block: ", hAge);

// var varables don;t have block scope. 