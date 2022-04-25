console.log("-----------------------------------");

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.1;

// 四舍五入
console.log(Math.round(area));

// cut pointing
console.log(Math.floor(area));

// 往上取整
console.log(Math.ceil(area));

// just keep integer
console.log(Math.trunc(area));


// 0 - 1
const random = Math.random();
console.log(random);
console.log(Math.round(random));
console.log(Math.round(random * 100));