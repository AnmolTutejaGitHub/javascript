//operations with date 

//can do operations wit dates

const future=new Date(2037,10,19,15,23)
console.log(Number(future))
//or                             //both will return in  millisecond  unix 
console.log(+future)



// //no. of days between two dates 
// const calcdaysPassed=(date1,date2)=>(date2-date1)

// const days1=calcdaysPassed(new Date(2037 , 3,14) , new Date(2037,3,24))
// console.log(days1)  //864000000      (milliseconds)
//to get in no. of days term

// const calcdaysPassed=(date1,date2)=>((date2-date1)/1000*60*60*24);
// const days1=calcdaysPassed(new Date(2037 , 3,14) , new Date(2037,3,24))
// console.log(days1)

const calcdaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcdaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

const days2 = calcdaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24,10,8));  //can also pass hours , min etc
console.log(days2); //10.422222222222222     can use Math.round()

