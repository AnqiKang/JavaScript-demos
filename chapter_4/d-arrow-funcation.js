// cleaner and shorter way to wirte funcations

// only one parameter, no need ()
// no parameter, multiple parameters need ()
const dCalcArea1 = radius => {
    return 3.14 * radius ** 2;
};


const dArea1 = dCalcArea1(5);
console.log("Area is: ", dArea1);

// one line content, no need {}, no need return keyword;
const dCalcArea2 = radius => 3.14 * radius ** 2;
const dArea2 = dCalcArea2(10);
console.log("Area is: ", dArea2);


const dGreet = () => "Hello, World";
console.log(dGreet());

const dBill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(dBill([10, 15, 30], 0.2));




