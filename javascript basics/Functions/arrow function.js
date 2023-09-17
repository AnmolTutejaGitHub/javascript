//Function expression --- remember what's an expression
const calage2=function(birthYear){  //anormous function   //strore function inside a variable
    return 2023-birthYear;   
}
const age2=calage2(1991);


//Arrow function
const calAge3=birthYear=>2023-birthYear;
const age3=calAge3(1991);

console.log(age2,age3);



// //if more code in arrow
// const yearsUntilRetirement=birthYear=>{
//     const age=2023-birthYear;
//     const retirement=65-age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));


//more than 1 parameter to arrow function
const yearsUntilRetirement=(birthYear,firstName)=>{
    const age=2023-birthYear;
    const retirement=65-age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991,'Anmol'));

