//optional chaining(?.)

const restaurant ={
    name:'Classico Italio',
    location:'via Angelo Tavani 23,Firenze , Italy',
    categories: ['Italian','Pizzeria','Vegetarian','organic'],
    staterMenu:['Focacci','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22
        },
        fri:{
            open:11,
            close:23
        },
        sat:{
            open:0,
            close:24
        },
    },
    order:function(starterIndex,mainIndex){
        return (this.staterMenu[starterIndex],this.mainMenu[mainIndex]);
    },
};

console.log(restaurant.openingHours.mon); //as mon property doesn't exist only thu,fri,sat exist
//output :  undefined     //why doing this we can simply see, not in case if data is coming from an API

//console.log(restaurant.openingHours.mon.open)  //will show error as undefined.property is an error 


//to avoid error can do 
if(restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open)
}//this will avoid error if this exist then evaluate 

//but what if we have to cherck multiple times 
//so to avoid error in our code we use ?.   just replace . with ?. to make optional chaining work (earier to use than  if statements)
console.log(restaurant.openingHours?.mon)
//and with optional chaining if a certain property doesn't exist then undefined will be returned immediately and so
//that will then avoid error that we saw earlier

console.log(restaurant.openingHours.mon?.open)  //output :  undefined
//if mon property exist then only this open property will be read

//can use multiple ?. 
console.log(restaurant?.openingHours?.mon?.open) //undefined

//Example
const days=['mon','tue','wed','thu','fri','sat','sun']

// for(const day of days){
//     restaurant.openingHours.day   //we can't do this(.day).If we want to use variable name as the property nae we need to use the bracket notation(learnt in fundamentals)
//     restaurant.openingHours[day]
// }

for(const day of days){
    const open=restaurant.openingHours[day]?.open; //checking if day exists then whats its opening time //only thu,fri,sat exist
    console.log(`On ${day} we open at ${open}`);
}
//ouput:
// on mon, we open at undefined
// on tue, we open at undefined
// on wed, we open at undefined
// on thu, we open at 12
// on fri, we open at 11
// on sat, we open at 0
// on sun, we open at undefined

//I dont want undefined in the sentence so we can give them default value of closed (using OR operator) if doesn't exist
for(const day of days){
    const open=restaurant.openingHours[day]?.open  || 'closed';  //if expression before || is a falsy value then open ='closed'
    console.log(`On ${day} we open at ${open}`);
}
//ouput:
// on mon, we open at closed
// on tue, we open at closed
// on wed, we open at closed
// on thu, we open at 12
// on fri, we open at 11
// on sat, we open at closed
// on sun, we open at closed

//see for saturday OR operator is setting it as closed, as it consider 0 as falsy value 
//so use nullish operator (instead of OR operator) which doesn't consider 0 and '' as falsy value but consider them a truthy value

for(const day of days){
    const open=restaurant.openingHours[day]?.open  ?? 'closed';  
    console.log(`On ${day} we open at ${open}`);
}
//ouput:
// on mon, we open at closed
// on tue, we open at closed
// on wed, we open at closed
// on thu, we open at 12
// on fri, we open at 11
// on sat, we open at 0
// on sun, we open at closed


// optional chaining for methods
//we can check if a method exist before we call if
console.log(restaurant.order?.(0,1)  ?? "Method doesn't exist"); // ?.() this syntax why? because if method does exist then we can call it otherwise doesn't , it will return undefined and then it is undefined ?? "Method doesn't exist"

console.log(restaurant.orderRoscosmos ?.(0,1)  ?? "Method doesn't exist");


//optional chaining on array
//can use optional chaining to check if a array is empty
const users=[{names:'Anmol', email:"tutejaanmol54@gmail.com"}]
console.log(users[0]?.names ?? "user array is empty")  //checks if user[0] exist if exist then grab name 

const user=[]
console.log(user[0]?.names ?? "user array is empty")

//if we do by traditional method then
if(user.length>0)console.log(user[0].name); else console.log('user array is empty')


