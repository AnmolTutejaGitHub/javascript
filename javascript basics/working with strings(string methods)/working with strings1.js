const airline="TAP Air Portugal";
const plane='A320';

console.log(plane[0]); //A
//cam also do:
console.log('B737'[0]) //B

//length property
console.log(airline.length);
//can use directly on string 
console.log('B737'.length);

//string methods
//some string methods are quite simlar to array methods
console.log(airline.indexOf('r')) //returns the index of first occurenece of r
//if u want index of last occurence then do:
console.log(airline.lastIndexOf('r'));

//can use indexOf to check if a word/character is present in string or not if not present it will return -1
console.log(airline.indexOf("Portugal")) //8

//slicing method
console.log(airline.slice(4)); //Air Portugal //4 is starting index

console.log(airline.slice(4,7)); //7th index not included     (start,end)
//length of string=end-start


//negative indexining while slicing
console.log(airline.slice(-2)) // al

//can also specify negative end parameter
console.log(airline.slice(1,-1)) //AP Air Portuga


//note this 
const str = "Hello, World!";

// Slice from index 3 to index 7
const sliced1 = str.slice(3, 7);
console.log(sliced1); // Output: "lo, "

// Slice from index -5 (5th from the end) to the end
const sliced2 = str.slice(-5);
console.log(sliced2); // Output: "orld!"

// Slice from index -12 to index -7
const sliced3 = str.slice(-12, -7);
console.log(sliced3); // Output: "Hello"


//behind the scenes in notebook
console.log(new String("Anmol"));
console.log(typeof new String("Anmol"));  //object
console.log(typeof new String("Anmol").slice(1));




