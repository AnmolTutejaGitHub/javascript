//pass by value vs pass by reference in javascript 

const flight="LH234";

const jonas={
    name:'Jonas Schmedtmamm',
    passport:23567889064357,
};

const checkIn=function(flightNum,passenger){
    flightNum="LH999";
    passenger.name="Mr. "+passenger.name;

    if(passenger.passenger===23567889064357){
        alert("Checked in");
    }
    else{
        alert("Wrong passport!")
    }
};

checkIn(flight,jonas)
console.log(flight)  //LH234 because copy of original object was passed
console.log(jonas)  //reference to object was passed , remember object stored in heap
//same as doing
//const flightNum=flight;
//const passenger = jonas;
//both jonas and passenger reference to same area in memory

