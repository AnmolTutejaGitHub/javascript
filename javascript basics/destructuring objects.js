//Destructuring objects 

'use strict';
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
        return (this.starterMenu[starterIndex],this.mainMenu[mainIndex]);
    },
};

//const{name,openingHours,categories}=restaurant;
//since order does not matter in objects so we don;t need to skip , , object elements like we did in array
//naming object element/property with same name here 
//console.log(name,openingHours,categories)


//what we like destructuring arrays we want object names diffferent from property names
// we can do propertyname:variablename   like this 
const{name:restaurantName,openingHours:hours,categories:tags}=restaurant;
console.log(restaurantName,restaurantName,hours,tags)

//setting default values
const{menu=[],starterMenu:starters=[]}=restaurant
console.log(menu,starters)

//mutable variables
let a=11;
let b=346;

const obj={
    a:23,
    b:7,
    c:14,
}

// {{a,b}=obj;}  //not working
// console.log(a,b)  //a=23,b=7
//now we have successfully overwrite a,b


//nested object(destructring)
const{fri}=openingHours;

//to deconstruct/unpack this fri object we need to follow this syntax
const{fri:{open,close}}=openingHours;
console.log(open,close)  //11,23

//we can also do this 
const{fri:{open:o,close:c}}=openingHours;
console.log(o,c);  //11,23