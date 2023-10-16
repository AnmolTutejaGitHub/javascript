//(functions): The call and apply methods

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