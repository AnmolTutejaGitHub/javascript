//Math and rounding 

//sqrt is part of Math namespace
console.log(Math.sqrt(25)); //5
console.log(25**(1/2)); //5
console.log(8**(1/3)); //2 cubic root of 8


//max,min
console.log(Math.max(5,18,23,11,2)) //23

//max function actually does type coersion
console.log(Math.max(5,18,'23',11,2)) //23

//math function does not do parsing
console.log(Math.max(5,18,'23px',11,2)) //NaN


//min
console.log(Math.min(5,18,23,11,2)) //2



//besides a couple of methods there are also constants on the Math object orthe Math namespace
console.log(Math.PI); //3.141592653589793
console.log(Math.PI*Number.parseFloat("10px")**2);  //314.1592653589793



//random

console.log(Math.random());  //gives a random no. between 0 and 1  //example 0.016003673548593556

//we can do this ex if we want no. for a dice 
console.log(Math.trunc(Math.random()*6)+1);  //genertates a random no. between 1(inc.) and 6(inc.) //Math.trunc removes the decimal part


//generalise
//random no bet 2 nos. (both included)
const randomInt=(min,max)=>Math.trunc(Math.random()*(max-min)+1)+min;
console.log(randomInt(10,20));



//Rounding integers 

//round
//rounds off to the nearest integer
console.log(Math.round(23.3)) //23 
console.log(Math.round(23.9)) //24

//ceil
//rounds up
console.log(Math.ceil(23.3)) //24
console.log(Math.ceil(23.9)) //24


//floor
//rounds down 
console.log(Math.floor(23.3)) //23 
console.log(Math.floor(23.9)) //23
//note: all of thse round methods also do type coersion 
console.log(Math.floor('23.3')) //23 

//u might think trunc and floor works same 
//it istrue for positive nos.
console.log(Math.trunc(23.9)) //23 
console.log(Math.floor(23.9)) //23

//but for negative no. 
console.log(Math.trunc(-23.9)) //-23  //removes decimal part
console.log(Math.floor(-23.9)) //-24 //for negative nos. rounding works other way around 


//so randomInt can be optimised to(works for -ve nos. too)
// const randomInt=(min,max)=>Math.trunc(Math.random()*(max-min)+1)+min;
// console.log(randomInt(10,20));
const randomInt1=(min,max)=>Math.floor(Math.random()*(max-min)+1)+min;
console.log(randomInt1(10,20));

//rounding decimals //floating point numbers 

//note : to fixed returns a string 

//argument of to fixed it upto how many decimal places u want ..  also rounds off 
// (2.7).toFixed(0) --> 3
// (2.7).toFixed(3) --> 2.700
// (2.745).toFixed(2) --> 2.75

console.log((2.7).toFixed(0)) //3
console.log((2.7).toFixed(3)) //2.700
console.log((2.745).toFixed(2)) //2.75
//if want in number form not in form of string 
console.log(+(2.7).toFixed(0)) //3 //+ do type coersion here 





