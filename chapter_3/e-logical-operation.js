// or || 
// and &&
// not !

const ePassword = "pas@";
if (ePassword.length >= 12 && ePassword.includes('@')) {
    console.log("That password is might strong! ")
}else if (ePassword.length >= 8 || ePassword.includes('@') && ePassword.length > 5) {
    console.log("That password is long enough!");
}else {
    console.log("That password is not long enough!");
}


let eUser = false;
if (!eUser) {
    console.log("You must be logged in to continue");
}