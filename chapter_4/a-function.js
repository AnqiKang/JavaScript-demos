// Funcation: define a block of code which we can call and execute whenever we want.

// funcation declaration : keyword -- function
function aGreet1(){
    console.log("Hello JavaScript!-- 1");
}

// funcation expression
// anytime we get a variable ane set it to something, 
// whether it' a function or a string, or number, or sth else.
// that is known as an expression
const aSpeak = function(){
    console.log("Good day!");
}; // need ';'



// invoke funcation
aGreet1();
aGreet2();
aSpeak();


// funcation declaration can after the funcation caller.
// fucnation expression must before the funcation caller.

// funcation declaration : keyword -- function
function aGreet2(){
    console.log("Hello JavaScript!-- 2");
}
