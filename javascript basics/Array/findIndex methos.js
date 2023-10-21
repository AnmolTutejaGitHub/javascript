//find index method 

//difference between indexOf method and findIndex method

let arrs=[1,3,6,9,5,8,37,89,36]
console.log(arrs.indexOf(8))

//if we wnt an exp[ression whose index had to be evaluated,, not findindex will retrurn first occurence 

const index=arrs.findIndex(arr=>arr%2==0)  //will return index of first element found satisfying this condition 
console.log(index) 
