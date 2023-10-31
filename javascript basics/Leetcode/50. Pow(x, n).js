/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return x**n;
};

//people using bitwise //optimisation
//there is pow or Math.pow in C/java 
//calculating without ** or pow using loops

// function calculatePower(base, exponent) {
//     if (exponent === 0) return 1;
    
//     let result = 1;
//     for (let i = 0; i < Math.abs(exponent); i++) {
//         result *= base;
//     }
    
//     return exponent < 0 ? 1 / result : result;    // 1/result   for -ve nos.
// }

// const base = 2;
// const exponent = 3;

// const result = calculatePower(base, exponent);
// console.log(`${base} ^ ${exponent} = ${result}`);

