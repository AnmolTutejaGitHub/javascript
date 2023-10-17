//at method

//const arr=[23,11,64]
let arr=[23,11,64]

//To get an element out of an array we traditionally do :
console.log(arr[0]) //23

//with at method
console.log(arr.at(0)) //23

//There is one particularity of at method which makes it quite useful instead of bracket notation
//suppose we want last element of the array and we dont know length of the array

//Traditionally we do :
console.log(arr[arr.length-1]); //64
console.log(arr.slice(-1)) //[64] but we dont want it inside an array so do 
console.log(arr.slice(-1)[0]) //64

//the new at method makes the process even easier 
console.log(arr.at(-1)) //64
//we can pass -ve indexes like at method




//at method also works on strings
console.log("jonas".at(0))  //j
console.log("jonas".at(-1)) //s



