const age=18;

age>=18 ? console.log("Can drink wine") : console.log("Drink water");

drink=age>=18 ? "wine" : "water"; //conditional operator returns a value unlike if else statement 
console.log(drink);

// can use ternary operator in template literals 
console.log(`I like to drink ${age>=18 ? 'wine': 'water'}`);
