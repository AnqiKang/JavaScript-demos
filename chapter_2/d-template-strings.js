const title = "Best reads of 2019";
const author = "Karen";
const myLikes = 30;

// concatenation way  
let conRes = "The blog called " + title + " by " + author + " has " + myLikes + " likes!";
console.log(conRes);

// template string way
let temRes = `The blog called ${title} by ${author} has ${myLikes} likes!`;
console.log(temRes);

// creating html templates
let htmlRes = `
    <h2>${title}</h2>
    <p>By ${author} </p>
    <span>This blog has ${myLikes} likes</span>
`;
console.log(htmlRes);