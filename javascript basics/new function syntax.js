//New Function syntax: This syntax can be used to create a function using a string literal. This syntax is not commonly used, but it can be useful in certain situations. For example, the following code will create a function that doubles a number:
const double = new Function("x", "return x * 2");
const result = double(5);
console.log(result); //10
