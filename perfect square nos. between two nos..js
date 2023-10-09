let a = (prompt("Enter number 1:"))
let b =(prompt("Enter number 2:"))
console.log(typeof(a))
a=parseInt(a)  // convert string into int
b=parseInt(b)

for(let i=a;i<=b;i++){
    let sqrt=i**(1/2)
    if (sqrt==Math.floor(sqrt)){   //Math.foor typecaste float to int
        console.log(i)
    }
}