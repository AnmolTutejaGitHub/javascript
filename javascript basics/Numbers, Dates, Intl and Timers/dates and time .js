//creating dates and time

//there are 4 ways of creating dates in JS
//they all use the new date constructoor but they accept different parameters 

//1.
const now=new Date();
console.log(now) //Tue Oct 24 2023 00:47:21 GMT+0530 (India Standard Time)


//2.Parse a date from a date string 
//new Date(date string) creates a date object from a date string:
console.log(new Date("Aug 02  2020 18:05")) //Sun Aug 02 2020 18:05:00 GMT+0530 (India Standard Time)
console.log(new Date("December 24, 2025")); //Wed Dec 24 2025 00:00:00 GMT+0530 (India Standard Time)
//give some date string annd js will complete that 



//3.
console.log(new Date(2037,10,19,15,23,5)); //Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)
//we passed 10 and we got nov because months in js is zero based 

//js also autocorrects the date 
console.log(new Date(2037,10,31)) //but november has only 30 days so
//Tue Dec 01 2037 00:00:00 GMT+0530 (India Standard Time)

// Note:
// JavaScript counts months from 0 to 11:
// January = 0
// December = 11


// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
// Specifying:

const d1 = new Date(2018, 15, 24, 10, 33, 30);
console.log(d1) //Wed Apr 24 2019 10:33:30 GMT+0530 (India Standard Time)

//Is the same as:
const d2 = new Date(2019, 3, 24, 10, 33, 30);
console.log(d2)//Wed Apr 24 2019 10:33:30 GMT+0530 (India Standard Time)



//4. passing milliseconds as arguments 
//passing as number not in string form 
// we can also pass into date constructor function the amoount of milliseconds passed since the beginning of unix time which is january 1 , 1970
console.log(new Date(0)) //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
//0 millisecond after unix time 

//3 days after unix time 
console.log(new Date(3*24*60*60*1000)) //Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)


//note : here 2018 will be interprested not as year but as milliseconds after unix time 
console.log(new Date(2018)) //Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)




//Dates we created here are special types of object so they have their own method 
const future=new Date(2037,10,19,15,23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)
console.log(future.getFullYear()) //2037
console.log(future.getMonth())//10  //zero based
console.log(future.getDate()) //19
console.log(future.getDay()) //4   (thu) //day of the week
console.log(future.getHours())//15
console.log(future.getMinutes()) //23
console.log(future.getSeconds())//0
console.log(future.toISOString()) //2037-11-19T09:53:00.000Z
//ISO String  follows some international standard 


//we can also get timestamp (milliseconds passed since unix time)  of the date 
console.log(future.getTime()) //2142237180000


//we can also get timestamp of the current moment 
console.log(Date.now()) //1698218653666



//set method for all these
future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT+0530 (India Standard Time)




