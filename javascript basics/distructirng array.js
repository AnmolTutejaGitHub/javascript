//Destructring

const arr=[2,3,4]
const a=arr[0]
const b=arr[1]
const c=arr[2]

//using array destruction we can do this in one line
const[x,y,z]=arr
console.log(x,y,z)

//if i want to assign to x and z only can do 
//using different variables name to avoid bugs as x,y are already in use
const [l, ,m]=arr //l=2,m=4

'use strict';
const restaurant={
    name:'classico Italino',
    location: '15 wall street',
    categories: ['Italian','pizzeria','vegetarian','organic'],
    starterMenu:['Focaccia','Bruschetlu','Garlic bread','capresse salad'],
    mainMenu:['pizza','pasta','risotta'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
};

console.log(restaurant.order(2,0))

//can do destruct assignment here
const [starter,mainCourse]=restaurant.order(2,0);



//if we have nested array
const nested=[2,4,[5,6]]
//const[i,j]=nested;
//console.log(i,j)

//nested destruction 
const[i,[j,k]]=nested;


//default values

//const[p,q,r]=[8,9]
//console.log(p,q,r) //p=8,q=9,r=undefined 
//we can set default values
const [p=1,q=1,r=1]=[8,9]
console.log(p,q,r) //p=8,q=9,r=1



