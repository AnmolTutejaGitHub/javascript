//short circuiting (&& and ||)
//until now we have only used logical operators to combine boolean values 
//but we can also use them on non boolean operand
console.log(3||'Jonas')  //3
console.log(''||'Jonas') //Jonas
console.log(true||0) //true
console.log(undefined||null) //null
console.log(undefined||0||''||"hello"||23||null)

//And operator and short circuiting
console.log(0&&'jonas') //0
console.log(7 && 'jonas') //jonas
console.log("hello"&&23&&null&&'jonas') //null

