//Timers : setTimeout and setInterval

setTimeout(()=>console.log(`Here is your pizza`),3000) 
//first argument of setTimeout function is a call back function , second argument is delay 
//this setTimeout function will call our callback function after 3000milliseconds / 3 seconds 
//after 3 seconds this will be printed to console


//when the execution of code reaches setTimeout, it will call setTimeout function .  setTimeout function will then essentially register this callback funtion to be called later and then code execution continues
setTimeout(()=>console.log("Here is your pizza"),3000);
console.log("Waiting....");
//when we run above block of code immediately waiting will be printed on console and after 3 seconds console.log("Here is your pizza")will be executed 


//passing arguments in the call back function of setTimeout()
setTimeout((ing1,ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}`),3000,'olives','spinach');

//we can actually cancel the timer , at least until the delay has actually passed.
 //so before 3 seconds here have passed . we can cancel the timeout
 const ingredients=['olives','spinach']
 const pizzaTimer=setTimeout((ing1,ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}`),3000,...ingredients) 
 clearTimeout(pizzaTimer);


 //setInterval function
 //run a function over and over again like every 5 seconds 
 setInterval(function(){
    const now=new Date();
    console.log(now)
 },1000);



