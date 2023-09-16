//Type coercion -- happens when an operator is dealing with two values that have different type
console.log("I'm"+23+"years old");//+ operator triggers a coercion to string if one of the value is string
console.log('23'-'10'-3);//10 // - operator triggers a coercion to Numbers
console.log('23'+'10'+3); //'23103'
console.log('23'*'2'); //46
console.log('23'/'2'); //11.2

let n='1'+1; //'11'
n=n-1; //'11'-1 = 11-1 =10
console.log(n)

console.log(2+3+4+'5'); //2+3+4+'5'=5+4+'5'=9+'5'='95'
console.log('10'-'4'-'3'-2+'5'); //'10'-'4'-'3'-2+'5'=6-'3'-2+'5'=3-2+'5'=1+'5'='15'
//Do operations based onn preference order
