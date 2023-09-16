const age=10;
const oldEnough=age>=18;

if(oldEnough){
    console.log('You can start driving licence');
}else{
    yearsleft=18-age;
    console.log(`You are too young wait another ${yearsleft} years.`)
}

//define any variable outside if else statement otherwise it is not accessible outside
let birthYear=2004;
let century; // Empty //undefined type
if(birthYear<=2000){
    century=20;
}else{
    century=21;
}
console.log(century);