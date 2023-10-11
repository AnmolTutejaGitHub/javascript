//changing case of a string
const airplane="Air India"
console.log(airplane.toLowerCase()) //doesnt take any parameter
console.log(airplane.toUpperCase())

//can also do
console.log("Anmol".toUpperCase())


//FIX Capitalisation in name

const passerger="aNmol"; //expected Anmol

const passengerLower=passenger.toLowerCase();
const passengerCorrect=passengerLower[0].toUpperCase()+passengerLower.slice(1)
console.log(passengerCorrect)

//compairing emails 
const email="hello@jonas.io";
const loginEmail="  Hello@Jonas.Io"

const lowerEmail=loginEmail.toLowerCase();
//trim function
const trimmedEmail=lowerEmail.trim(); //removes wide spaces
console.log(trimmedEmail) //hello@jonas.io

//can do in one step
const normalisedEmail=loginEmail.toLowerCase().trim();

console.log(normalisedEmail);
console.log(email===normalisedEmail);

//From ES2019 there are also trimstart and trimend , as name suggest we can use them to trim wide space only from start of the string or only from end


////replacing parts of string //replace method
const priceGB='288,97E'
const priceUS=priceGB.replace("E","$").replace(",",".");
console.log(priceUS)

const announcement="All passengers come to bboarding door 23,Boarding door 23!"
console.log(announcement.replace('door','gate')) ;
//replaces first appearence of door with gate
//So js has another method called replaceAll()
//below method will work in future 
//console.log(announcement.replaceAll('door','gate'))

//another way to do this (replace all) is to use regular expressions
console.log(announcement.replace(/door/g,'gate'))

//3 different methods on string that returns a boolean
//includes,startwith,endswith

const plane='A320ner'
console.log(plane);
console.log(plane.includes("A3"));
console.log(plane.includes("Boeing"));

console.log(plane.startsWith("A32")); //true
console.log(plane.startsWith("A3"));  //true
console.log(plane.endsWith("er"));  //true
console.log(plane.endsWith("neo"));  //false


