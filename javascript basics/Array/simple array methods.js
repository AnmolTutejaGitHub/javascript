//simple array method 


//slice method
let arr=['a','b','c','d','e']

console.log(arr.slice(-2))  // ['d','e']
console.log(arr.slice(1,-2)) // ['b','c']

//way to get last element of the array
console.log(arr.slice(-1)) // ['e']


//we can create copy of an array
console.log(arr.slice()) //['a','b','c','d','e']
//we can also create copy of an array using spread operator
console.log([...arr])



//splice method
//works in almost the same way as slice.Fundamental difference is it does in fact changes the original array,it mutates that array
console.log(arr.splice(2)) //['c','d','e']
console.log(arr) //['a','b'] splice deleted the spliced/extracted element from the original array
arr.splice(-1) //deltes the last element of the array

//getting original array again
arr=['a','b','c','d','e']
arr.splice(1,2) //['a','d','e']
//(index,no of elements to delete)
//2 is here no of elements we want to delete starting from index no (1 in this case)taken as previous argument 
//splice method is somewhat different from slice




//reverse method -- to reverse an array
arr=['a','b','c','d','e']
let arr2=['j','i','h','g','f']
console.log(arr2.reverse()) //['f','g','h','i','j']

//reverse method does in fact mutate the original array
console.log(arr2) //['f','g','h','i','j']


//concat method
//it is used to concat two arrays

//arr,arr2 are concatenated ( notr : arr2 is here what we reversed as we mutated the original )
//arr=['a','b','c','d','e']
//arr2=['f','g','h','i','j'] currently
const letters=arr.concat(arr2) //['a','b,'c','d','e','f','g','h','i','j']
console.log(letters)
//arr is the one on which method is called and arr2 is passed in the concat method
//concat does not mutate the original array here 

//we can simply do
console.log([...arr,...arr2])


//Join mewthod
console.log(letters.join(" - "))

