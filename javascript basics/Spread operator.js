//The spread operator -- expand an array into all its individual elements 

const arr=[7,8,9];
//without spread operator
const badNewArr=[1,2,3,arr[0],arr[1],arr[2]]; 

//better way to do this is by using the spread operator 
const newArr=[1,2,3,...arr];
console.log(newArr); //[1,2,3,7,8,9]
console.log(...newArr); // 1 2 3 7 8 9

//copy array 
const arrCpy=[...arr];
console.log(arrCpy)

//Join two arrays or more 
const joint=[...arr,...newArr];
console.log(joint)


//spread operator not only works for arrays but on all iterables
//In js arrays,maps,sets,strings are iterables but not objects
const str='jonas';
const letters=[...str,' ','S.']
console.log(letters)  //['j','o','n','a','s',' ','S.']
console.log(...str)   // j o n a s 

//using spread operator to pass multiple values as arguments in a function 
function order(ing1,ing2,ing3){
    console.log(`your's pizza ingredients are ${ing1},${ing2},${ing3}`)
}

const ingredients=[prompt('let\'s make pizza ! ingredient 1?'),prompt('let\'s make pizza ! ingredient 2?'),prompt('let\'s make pizza ! ingredient 3?')]

//old way :
order(ingredients[0],ingredients[1],ingredients[2])
//using spread operator
order(...ingredients)


//since ES2018 spread operator also works on objects even though objects are not iterables
obj={
    name:'Anmol',
    age:19,
    occupartion: 'berojgar'
}

objCopy={Religion:'hinduism',...obj,affiliated:'The human foundation'}
console.log(obj)
console.log(objCopy)

objCopy.age=20
console.log(obj.age)  //20
console.log(objCopy.age) //19
//better than using Object.assign