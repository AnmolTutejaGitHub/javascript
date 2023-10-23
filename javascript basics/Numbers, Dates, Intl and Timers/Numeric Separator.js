//Numeric Separator 
//introduced in ES2021

const diameter=287460000000;
console.log(diameter) //287460000000
//difficult to read it some billion , some trillion or something 
//like in normal math we put 
//287,460,000,000
//we can put _ in no. for readability from ES2021

const diameter1=287_460_000_000;
console.log(diameter1) //287460000000
//js engine will ignore _ 

//we can also _ to give meaning to certain part of our number
const price=345_99 //345 dollars 99 cents easy readability
console.log(price) //34599

const transferFEE1=15_00;
const transferFEE2=1_500;

const PI=3.14_15
/*      can't do   :        

_3.1415  start 
3._1415  after decimal
3_.1415  before decimal
3.1415_  end 

*/

console.log(Number("230000")); //230000
console.log(Number("230_000")) //NaN
console.log(parseInt("230_000")) //230