//Function declaration
function calAge1(birthYear){
    return 2023-birthYear;
}

const age1=calAge1(1991);

//Function expression --- remember what's an expression
const calage2=function(birthYear){  //anormous function   //strore function inside a variable
    return 2023-birthYear;   
}
const age2=calage2(1991);


console.log(age1,age2);


//difference is is can call functions declared as declaration before they are defined
const age3=calage3(1991);
function calage3(birthYear){
    return 2023-birthYear;
}
console.log(age3)