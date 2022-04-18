let ageCom = 25;

// loose comparison - different types can still be equal
console.log("ageCom == 25", ageCom == 25);
console.log("ageCom == '25' ", ageCom == "25");
console.log("ageCom != 25", ageCom != 25);
console.log("ageCom != '25'", ageCom != "25");

// strict comparison - different types cannot be equal
console.log("age === 25 ", ageCom === 25);
console.log("age === '25' ", ageCom === "25");
console.log("ageCom !== 25", ageCom !== 25);
console.log("ageCom !== '25'", ageCom !== "25");

