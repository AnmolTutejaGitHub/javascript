//rest pattern and rest parameters

//rest pattern collects multiple elements and spread them into the array 
//opposite of spread operator , but uses same syntax ie the three dots (...)


//spread , becasuse on right side of =
const arr=[1,2,...[3,4]];


//rest because on left side of =
const [a,b,...others]=[1,2,3,4,5];   //revisit concept of destructuring an array too 
console.log(a,b,others); // 1  2  [3,4,5]

//functions (rest parameters)

const add=function(...numbers){  // ... rest here 
  console.log(numbers)
   let sum=0
   for(let i=0;i<numbers.length;i++){ // .length method as  umbers is an array 
   sum+=numbers[i]}
   console.log(sum)

}
add(2,3)  //numbers=[2,3]  sum=5
add(2,65,7,8,9)   //can pass as many aruments as want (see this use of rest )
add(5,7,9,9,5,4,95,96)


//function arguments are already array
let x=[2,4,6,9]
add(...x)  // ...spread operator

//(...x) will spread the elements and ...numbers will make them in array
//unpacking and packing again

