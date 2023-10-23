//The find method in javascript 
//just like other array method find method also takes calll back function
const movements=[200,450,-400,3000,-650,-130,70,1300]

const firstWithdrawl=movements.find(mov=>mov<0)
console.log(firstWithdrawl)
//find method will freturn 1st element in the array that satisfy this condition

//difference between filter and find method
//filter method returns array of ......  // whilew the find mewtjhod only returns the first one 


