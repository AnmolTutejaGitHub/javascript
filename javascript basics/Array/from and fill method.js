//ways of creating and filling arrays 

console.log([1,2,3,4,5,6,7]);  //[1, 2, 3, 4, 5, 6, 7]

console.log(new Array(1,2,3,4,5,6,7));  //[1, 2, 3, 4, 5, 6, 7]



const x= new Array(7); // [empty*7]

//x.map(()=>5) //nothing will happen
//we can call fill method on x 
x.fill(1) //[1,1,1,1,1,1,1]
console.log(x)

//similar to spilt we can specify start and end 
const y= new Array(7);
y.fill(1,3) 
console.log(y) //[empty*3,1,1,1,1]

const z= new Array(7);
z.fill(1,3,5) //[empty*3,1,1,empty*2]
console.log(z)


//we can also use the fill method on other arrays , it doesn't need to be empty array
const arr=[1,2,3,4,5,6,7]
arr.fill(23,4,6)
console.log(arr) //[1, 2, 3, 4, 23, 23, 7]





//Array.form()
const a = Array.from({length:7},()=>1) // [1, 1, 1, 1, 1, 1, 1] //here Array is array constructor
console.log(a)

const b=Array.from({length:7},(curr,i)=>i+1)  //callback function lile map function  , current varible , current index 
console.log(b) //[1, 2, 3, 4, 5, 6, 7]


