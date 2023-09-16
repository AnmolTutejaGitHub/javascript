//strings and template literals

const firstName='Anmol';
const job='Berojgar';
const birthYear=2004;
const year=2023;

const anmol="I'm" + firstName+ ' a' + (year-birthYear) + ' years old' + job +"!";
console.log(anmol);
// It is clearly difficult to keep trace of  spaces 
// so from ES6 we have concept of string literals (something like .format in python)
// ``  are backticks
const anmolNew=`I'm ${firstName} , a ${year-birthYear} year old ${job}`;
console.log(anmolNew);

//can use bacticks for regular strings too
console.log(`This is a regular string`);

//Multi lines string
//before ES6 
console.log("String with\n\
multiple lines\n\
lines.");

//After ES6
//Notice backticks here
console.log(`string
with
multiline`);

