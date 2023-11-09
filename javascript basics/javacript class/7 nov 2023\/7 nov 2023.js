//control statement
// let age=parseInt(prompt("Enter ur age :"))

// if(age<0 || age>100) console.log(`Out of Range`)
// else console.log(`Your age is ${age}`)


// //looping statement 
// for(let i=0;i<10;i++){
//     console.log(`Times up ${i}`)
// }

// for(let i=1;i<=5;i++) console.log(i)

// console.log(i) //6


// // write for loop to display first 25 prime nos
let cases=0

for(let i=2;cases<25;i++ )

{ let prime=true
    for(let j=2;j<i;j++){
        if(i%j==0) 
        {prime=false
            break}

    }
    if(prime){
         console.log(i)
         cases+=1
}
}






