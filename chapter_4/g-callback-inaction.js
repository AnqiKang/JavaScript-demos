const url = document.querySelector('.people');
const people = ["Karen", "Mike", "Kai", "Jingyu", "Shaun"];

let html = ``;

people.forEach(person => 
    // html template 
    html += `<li style="color: purple"> ${person}</li>`);

console.log(html);
url.innerHTML = html;