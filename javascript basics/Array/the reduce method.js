//Reduce method 
//we use the reduce method to essentially boil the elements in an array to a single value

const movements=[200,450,-400,3000,-650,-130,70,1300]

const balance=movements.reduce(function(acc,curr,i,arr){
    return acc+curr;
},0);
console.log(balance) //3840
//acc -- accumulator
//curr -- current element
//first argument of call back function is accumulator

// 0 we specified there is the initial value of the accumulator
// each loop iteration will return the updated acc 


//using arrow as call back function
const balance2=movements.reduce((acc,curr)=>acc+curr,0);
console.log(balance2) //3840


//for of loop sntax
let balance3=0;  //extra variable
for (const mov of movements) balance3+=mov;
console.log(balance3) //3840


//maximum value of movements array
//acc will keep track of current maximum
const max=movements.reduce((acc,mov)=>{
    if(acc>mov)
    return acc;
else
    return mov;  //whatever return will ne next iteration value of acumulator
},movements[0])
console.log(max) //3000

