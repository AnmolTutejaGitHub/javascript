//some and every method
const movements=[200,450,-450,-400,3000,-650,-130,70,1300]

console.log(movements.includes(-130)) //true

//includes method checks for equality whether -130 is in array or not but if we want to check for condition then some method comes into play
const anyDeposits=movements.some(mov=>mov>0) //true
console.log(anyDeposits)

const greater1500=movements.some(mov=>mov>1500) //true
console.log(greater1500)
//if there is any value in array for which this condition is true . the some methodd will return true 

//every method
const allpositive=movements.every(mov=>mov>0)
console.log(allpositive) //false

