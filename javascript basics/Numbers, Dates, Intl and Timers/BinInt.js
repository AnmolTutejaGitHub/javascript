//working with BigInt
console.log(2 ** 53 - 1);  //biggest number that js can repsent safely explanation in nb
console.log(Number.MAX_SAFE_INTEGER);


console.log(4838430248342043823408394839483204n);  //n reprresent BinInt 
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
//console.log(10000n + 10000); //error
// console.log(Math.sqrt(16n));  //error 

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);  //3n
console.log(10n/3n); //3n
console.log(12n/3n); //4n
console.log(10 / 3); //3.3333333333333335
