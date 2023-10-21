//flat and flatMap method 

//1 level of nesting 
const arr=[[1,2,3],[4,5,6],[7,8]] 
console.log(arr.flat()) // [1,2,3,4,5,6,7,8]
//takes all the elements from sub array and puts them in one big array

//what if we have 2 level deep nesting
const arrDeep=[[[1,2],3],[4,[5,6]],7,8]
console.log(arrDeep.flat()) //[[1,2],3,4,[5,6],7,8]
//flat method goes 1 level deep while flattering an array , we can fix this using depth argument 

console.log(arrDeep.flat(2)) //[1,2,3,4,5,6,7,8] 
//2 level flaterring 



