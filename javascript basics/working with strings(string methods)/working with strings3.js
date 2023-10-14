//split method -- returns array
console.log("a+very+nice+string".split("+"));
//output: ["a","very","nice","string"]

console.log("Anmol Tuteja".split(" ")) //["Anmol","Tuteja"]  //split by space 

const[firstName,lastName]='Anmol Tuteja'.split(" ");


//join method -- takes array
const newName=["Mr.",firstName,lastName.toUpperCase()].join(" ");
console.log(newName); //Mr. Anmol TUTEJA


//capitalise first word of each letter of string 

// const capitalizeName=function(name){
//      const names=name.split(" ");
//      const namesUpper=[];

//      for (const n of names)
//      {
//         namesUpper.push(n[0].toUpperCase()+n.slice(1))
//      }
//      console.log(namesUpper.join(" "));
// };

// capitalizeName('peter parker');

//other way to do this :
const capitalizeName=function(name){
    const names=name.split(" ");
    const namesUpper=[];

    for (const n of names)
    {
       namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
    }
    console.log(namesUpper.join(" "));
};

capitalizeName('peter parker');


//padding a string 
const message ="Go to gate 23!";
console.log(message.padStart(25,"+")) // +++++++++++Go to gate 23!  //hength og\f this entire string is 25
console.log(message.padStart(25,"+").padEnd(35,"+"))


const maskCreditCard=function(number){
    //const str=String(number)
    //can do this too to convert a number into string
    const str=number+"" //empty string is added

    const last=str.slice(-4); //last four
    return last.padStart(str.length,"*")
}
console.log(maskCreditCard(34567890098765)) //**********8765


//repeat method 
// allows to repeat a string multiple times

const message2="Bad weather... All departure delayed ";
console.log(message2.repeat(5)) 


const PlaneInTime=function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}

PlaneInTime(5)

