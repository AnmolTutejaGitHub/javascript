//(functions): The call and apply methods and bind methods

const lufthansa={
    airline:"Lifthansa",
    iataCode:"LH",
    bookings:[],

    //booking=function(){}
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight:`${this.iataCode} ${flightNum},name`});
    }
};

lufthansa.book(236,"Jonas Schmedtmann")
lufthansa.book(635,"Johhn Smith")


const eurowings={
    airline:"Eurowings",
    iataCode:"EW",
    bookings:[],
    //book
}

// I want to write book method for every flight 
// I will not copy and paste it in every flight
//instead i will create a function outside any object in main space 

const book=lufthansa.book;
//book(23,"Sarah swilliams")
//this will show error because in this outside book function  / in any regular function this keyword will point to undefined 
//so we need to explicitly tell js what this keyword should look like 

book.call (eurowings       ,23,"Sarah Williams")
//        this keyword       rest of arguments 

const swiss={
    airline:"Swiss Airline",
    iataCode:'LX',
    bookings:[]
}
book.call(swiss,583,"Marry Copper") //note if there was this.airline in original then in swiss object there must be a property called airline 



//Apply method 
//Apply method does exactly the same thing as call method , the only difference is apply doesn't receive a list of arguments after 'this' keyword but instead takes array of arguments 
const flightData=[583,"Osama laden"]
book.apply(swiss,flightData)
//same as 
book.call(swiss,...flightData)

//Bind method 
//just like call method,bind method m,anually allows us to set this keyword
//for any function call.The difference is that bind doesn't immediately call the function instead it returns a function where 
//this kwyword is bound.So, it is set to whatever value we pass into bind

//book.bind(eurowings); store it in a variable
const bookEW=book.bind(eurowings)
bookEW(23,"Stephen Williams")

const bookLH=book.bind(lufthansa)
const bookLX=book.bind(swiss)

//with bind method 
const bookEW23=book.bind(eurowings,23)
//specifying parts of the arugments beforehand is a common pattern called partial application
//partial application means that a part of the arguments of the original function are already applied 
//in above example we specefied 23 
bookEW23("Jonas Switchwan")



//Another usage of bind method
//with event Listener 

lufthansa.planes=300
lufthansa.buyPlane=function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

//document.querySelector(".buy").addEventListener("click",lufthansa.buyPlane)
//we will get NaN in console each time button is pressed 
//because in eventhanderfunction, this keyword points to the element on which that handler is attached to 
//so do this 
document.querySelector(".buy").addEventListener("click",lufthansa.buyPlane.bind(lufthansa))


//partial application
//many times we are not interested in this keyword
//partial application means we can pre set parameters 

const addTax=(rate,value)=>value+value*rate;

console.log(addTax(0.1,200))  //210

const addVAT=addTax.bind(null,0.23); //as there is no this keyword so set it to null
                            // we pre set rate value 

console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//chaqllenge write the above tax whatever using function returning a function
const addTaxRate=function(rate){
    return function(value){
        return value+value*rate
    }
}
const addVAT2=addTaxRate(0.23);






