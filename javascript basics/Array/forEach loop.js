//forEach method for array iteration

const movements=[200,450,-400,3000,-650,-130,70,1300]

for(const movement of movements){
    if(movement>0){
        console.log(`You deposited ${movement}`)
    } else{
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
};

//same thing can be achivewdf with forEach method
movements.forEach(function(movement){
    if(movement>0){
        console.log(`You deposited ${movement}`)
    } else{
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
});
//0:function(200)
//1:function(450)
//2:function(400)
//..........
//callback function in forEach loop will be executed for each iteration



//If we need counter variable to access current index of the array
for(const [i,movement] of movements.entries()){
    if(movement>0){
        console.log(` movement ${i+1} : You deposited ${movement}`)
    } else{
        console.log(`movement ${i+1} :You withdrew ${Math.abs(movement)}`)
    }
};

//in for each method we not only pass in current element of the array but also the index and the entire array
movements.forEach(function(movement,i,arr){
    if(movement>0){
        console.log(` movement ${i+1} : You deposited ${movement}`)
    } else{
        console.log(`movement ${i+1} :You withdrew ${Math.abs(movement)}`)
    }
});

//remember : You can't break out of forEach loop , so continue and break statements won't work for forEach loop
//forEach will always loop over the entire array 