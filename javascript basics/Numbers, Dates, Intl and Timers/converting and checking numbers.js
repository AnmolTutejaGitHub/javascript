//converting and checking numbers 

//in js all numbers are represented internally as floatig point numbers.so basically as decimals 
//no matter we write them as integer or as decimal
console.log(23===23.0) //true

//numbers are represented internally as a 64 base 2 format.so that means numbers are always stored in a binary format .
//in binary form it is very hard to represent some fractions that are very easy to represent in base 10 system
//base 10 - 0 to 9
//base 2 - 0 , 1
//one example of that is fraction 0.1
console.log(0.1+0.2) //0.30000000000000004
console.log(0.1+0.2===0.3) //false 


//converting strings to numbers 
console.log(Number('23')); //23
console.log(+"23") //23 //js will do type coersion when js see +


//parsing 
console.log(Number.parseInt("20px")); //20 //here Number is an object
//can use parsing to get ride of unit we get from css (20px -->20)

//note: for parsing a string need to start from a number
console.log(Number.parseInt("e23")); //NaN

//parseInt function accepts second argument which is called regex.
//regex is the base of the number system that we are using.
console.log(Number.parseInt("30px",10)); //30
console.log(Number.parseInt("30px",2)); //NaN


//there is also parseFloat
console.log(Number.parseFloat("2.5rem")) //2.5
console.log(Number.parseInt("2.5rem")) //2  //we got integer part 

//whitespaces doesn't affect
console.log(Number.parseFloat("  2.5rem    ")) //2.5
console.log(Number.parseInt("   2.5rem    ")) //2  

//parseInt  and  parseFloat are global functions so need not call them on Number
console.log(parseInt("2.5rem")) //2
//above was tradition way of doing it . in modern js we call these function on a number object

//check if value is NaN (NaN --> not a number)
console.log(Number.isNaN(20)) //false
console.log(Number.isNaN("20")) //false
console.log(Number.isNaN(+"20x")) //true
console.log(23/0) //infinity
console.log(Number.isNaN(23/0)) //false


//isFinite --> best way of checking if a value is a number not a string
console.log(Number.isFinite(20)) //true
console.log(Number.isFinite("20")) //false
console.log(Number.isFinite(+"20x")) //false 
console.log(Number.isFinite(23/0)) //false


//isInteger
console.log(Number.isInteger(20)) //true
console.log(Number.isInteger(20.0))  //true 
console.log(Number.isInteger("20.0")) //false 
console.log(Number.isInteger(23/0)) //false
console.log(Number.isInteger(23.90)) //false





