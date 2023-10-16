//immediately invoked fuction expressions (IIFE)

//sometimes we need a function that is only executed once and then
//never again so basically function that disappears right after its called once 
//we will need them in async and await

const runOnce=function(){
    console.log("This will never run again")
}

runOnce();
runOnce();
// way to do this is below 

//IIFE
(function(){
    console.log("this will never be executed again !")
   // isPrivate=23
})();  //(); is calling function immediately as it has no naME IT CAN;T BE Called again
//console.log(isPrivate)
//isPrivate cant be accessed outside of function scope I dont know why thw fuck it is accessed outside the function block

//in arrow function

(()=>console.log("This will also nev er bee run again"))();


{
    const isPrivate=23
    var notPrivate =46
}

console.log(notPrivate) //46 //can be accesssed as declared with var 
console.log(isPrivate)  // error 
  //cant be accessed as not in scope  its scope is {           }
