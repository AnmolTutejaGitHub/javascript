//sorting arrays 
 const owners=["Jonas","Zach","Adam","Martha"]
 console.log(owners.sort()) // ['Adam', 'Jonas', 'Martha', 'Zach']
// note: sort method mutates the original array
console.log(owners)


const movements=[200,450,-450,-400,3000,-650,-130,70,1300]
console.log(movements.sort()) //[-130, -400, -450, -650, 1300, 200, 3000, 450, 70]
// why this result because : js will convert them into strings In your movements array, 
//the elements are numbers, both positive and negative. When these numbers are converted to strings, 
//their ordering is based on their string representations, and this results in lexicographic sorting.
// - comes before them 1,2,3,..... alphabatecially ordered if they were strings 




//If you want to sort the numbers in numerical order (ascending or descending), you need to provide a compare function to the sort method.
//The sort method, when given a compare function, sorts elements based on the return value of that function. If the function returns a negative value,
// it means the first element should come before the second element. If it returns a positive value, it means the first element should come after the second element.
// If it returns 0, it means the elements are considered equal in terms of sorting.

//ascending order
//return<0 A,B --> (keep order)if return<0 A will be before C
//return >0 B,A --> switch order
movements.sort((a,b)=>{
if(a>b) return 1;//anything >0
if(b>a) return -1;
})
//or 
//movements.sort((a, b) => a - b);

console.log(movements) //[-650, -450, -400, -130, 70, 200, 450, 1300, 3000]


//descending order
movements.sort((a,b)=>{
    if(a>b) return -1;
    if(b>a) return  1;
    })
    //or 
    //movements.sort((a, b) => b - a);

    console.log(movements) //[3000, 1300, 450, 200, 70, -130, -400, -450, -650]





//if we don't  wanna to mutate the original array then make a copy of it
//movements.slice().sort()  //add compare function
