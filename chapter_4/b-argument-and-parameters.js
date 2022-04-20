// parameter
const bSpeak = function(name = "Kai", time = "night"){
    console.log(`good ${time} ${name}`);
};

// argument
bSpeak("Karen","morning");

// to aviod a funcation is invoked without passing any arguments. 
// we can give default value.
bSpeak()