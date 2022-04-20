const eName = "Karen";

// functaion: invoke funcation directly
const eGreet = () => "Hello";

let res1 = eGreet();
console.log(res1);

// methods: using dot notation to invoke methods. 
let res2 = eName.toUpperCase();
console.log(res2);


// methods are functaions. but they are funcations 
// which are associated with an object or date type.
// they are defined on an object or data type, 
// whereas our funcation was just defined here on its own.