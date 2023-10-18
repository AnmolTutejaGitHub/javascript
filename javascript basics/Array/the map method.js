//map method 

const movements=[200,450,-450,-400,3000,-650,-130,70,1300]

const eurToUsd=1.1;

const movementsUSD=movements.map(function(mov){    //notice the use of call back function just like we do in forEach
    return mov*eurToUsd; 
});

console.log(movements)
console.log(movementsUSD)

//in for of terms 
const movementUSDfor=[];
for(const mov of movements){
    movementUSDfor.push(mov*(eurToUsd))
}
console.log(movementUSDfor);

//using arrow function syntax for callback funtion in our map method 
const movementsUSD2=movements.map(mov=> mov*eurToUsd);    //notice the use of call back function just like we do in forEach
console.log(movementsUSD2)


// if I do this :
const movements1=[200,450,-450,-400,3000,-650,-130,70,1300]

const eurToUsd1=1.1;

const movementsUSD1=movements1.map(function(mov){    //notice the use of call back function just like we do in forEach
    return 23; 
});

console.log(movements1)
console.log(movementsUSD1) //[23,23,23,23,.... same length as length of mpovement1 array]




//map method takes 3 parametes just like forEach method
//(array element , index , array )

const movementsDescription=movements.map((mov,i)=>{
    if(mov>0){
    return `Movement ${i+1} : You deposited${mov}`}
    else{
        return `Movement ${i+1} : You widthrew ${Math.abs(mov)}`}
    });
    console.log(movementsDescription)