//filter method
const movements=[200,450,-450,-400,3000,-650,-130,70,1300]

const deposits=movements.filter(function(mov,i,arr){
    return mov>0;
});
console.log(deposits) //[200,450,3000,70,1300]

const withdrawls=movements.filter(mov => mov<0); //cALL BACK FUnction as arrow function
console.log(withdrawls)


//for of loop syntax
const depoitsFor=[];
for(const mov of movements) {
 if (mov>0){
    depoitsFor.push(mov);
 }
};
console.log(depoitsFor)