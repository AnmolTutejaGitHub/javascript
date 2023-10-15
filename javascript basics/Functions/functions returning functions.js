//Functions returning another functions 

const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey=greet("Hey")  //function returned from greet will be stored in greeterHey 

greeterHey("Jonas") // Hey Jonas
greeterHey("Stephen")  //Hey Stephen


const greeterHi=greet("Hi")
greeterHi("Jonas")    //Hi Jonas
greeterHi("Stephen")  //Hi Stephen

//can also do
greet("Hello")("Jonas") //Hello Jonas //greet("Hello") will return a function and that function will take Jonas as argument 


//Greet function in form of arrow function  greetArr is arrow function
const greetArr=greeting=>name=>console.log(`${greeting} ${name}`)
greetArr("Bonjour")("Jonas")