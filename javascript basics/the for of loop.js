//New way of looping over arrays intrudcuced in ES6
const arr=[1,356,7,37,367,37,262,5,35,225,63,26]

//old way
for(let i=0;i<arr.length;i++){     //relate it with C
console.log(arr[i])    
}

//using for of loop
for(const item of arr) console.log(item)   //relate it with python

for(const item of arr.entries()){   //use for index
    console.log(item)   //output is index number of that element with the element value
}

for(const item of arr.entries()){
    console.log(item)
    console.log(`index:${item[0]} with value ${item[1]}`)  //note item[0] and item[1] are 2nd indexing as [0,1] then for next iteration [1,356]
}
//above is old way to do this better way is destructuring 
for(const [i,el] of arr.entries()){
    console.log(`index:${i} with value ${el}`)
}