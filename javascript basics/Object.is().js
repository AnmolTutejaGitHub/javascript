//Object.is() vs ===:
//The Object.is() method is a stricter comparison operator than ===. It will only return true if two values are both the same type and have the same value. For example, the following code will evaluate to false:
console.log(0 === NaN); // false
console.log(Object.is(0, NaN)); // false

