//Truthy and falsy values

// 5 falsy values: 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//type coersion to boolean  --implicit
const money=0;
if(money){
    console.log("Don't send it all")
}else{
    console.log("You should get a job!")
}
