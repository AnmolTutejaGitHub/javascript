//the magic of chaining methods
//using map,filter,reduce method

const movements=[200,450,-400,3000,-650,-130,70,1300]

const eurToUSD=1.1;
const totalDepositsUSD=movements.filter(mov=>mov>0).map(mov=>mov*eurToUSD).reduce((acc,mov)=>acc+mov,0)
console.log(totalDepositsUSD)
//can call any method after reduce method bwcause it return a value not an array



