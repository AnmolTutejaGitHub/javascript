//constructor function , new keyword , protopype
//can create a function declaration/function expression but don't use arrow function as arrow function doesn't have its own this keyword
const Person=function(firstname,birthYear){
    //instance properties
    this.firstname=firstname;
    this.birthYear=birthYear;

    //method
    this.calcAge=function(){
        console.log(2023-this.birthYear)
    }
}
const jonas=new Person("Jonas",1991)
console.log(jonas) //Person {firstname: 'Jonas', birthYear: 1991}
//jonas is instance of Person

//we can create as many as we want 
const matilda=new Person("Matilda",2017)


console.log(jonas instanceof Person) //true
//will return true or false 

const jay="Jay"
console.log(jay instanceof Person) //false




Array.prototype.f=function() {return `F Ways`}

let arr=[1,4,7,9,24]
console.log(arr.f()) ///wtf this worked 


Person.prototype.calcAge2=function(){
    return 2037-this.birthYear
}
console.log(jonas.calcAge2())  //46


//below is classic 
//so we can even overwrite existing methods 
// Array.prototype.map=function(){
//     return 'Bura hua'
// }

let arr2=[1,3,56,78,8]
let arr3=arr2.map((v,i)=>v**2)
console.log(arr3)

console.log(Array.prototype) //A way to know all the pre defined methods available on the object in this case on an array 


console.log(jonas.__proto__)

console.log(jonas.__proto__===Person.prototype) //true
//can use inbuilt methods too
console.log(Person.prototype.isPrototypeOf(jonas)) //true

//note: Person.prototype is actually not prototype of Person .But instead it's what is going to be used as prototype ofvall the objects that are created with the Person constructor function
console.log(Person.prototype.isPrototypeOf(Person)) //false

console.log(__proto__)

Person.prototype.species="Homosapians";
console.log(jonas.species) //Homosapians
console.log(jonas) //Person {firstname: 'Jonas', birthYear: 1991, calcAge: ƒ}

console.log(jonas.hasOwnProperty("firstname")) //true
console.log(jonas.hasOwnProperty("species")) //false
console.log(jonas)   //Person {firstname: 'Jonas', birthYear: 1991, calcAge: ƒ}
console.log(jonas.species) //Homosapians

//because this(species) property is not really in jonas object . It simply has access to it because of its prototype, because it's in the prototype property of person 



console.log(Person.prototype.constructor)  
//output:
   //ƒ (firstname,birthYear){
    // //instance properties
    // this.firstname=firstname;
    // this.birthYear=birthYear;

    // //method
    // this.calcAge=function(){
    //     console.log(2023-this.birthYear)
    // }

    //.constructor points back to Person
    //Person.prototype has reference back to Person which is constructor property

    //Person.prototype.constructor is gonna points back to Person itself

    //note: Person.prototype is not the prototype of Person but all the objects that are created through the  Person function 

    console.log(jonas.__proto__.__proto__) //=== prototype of the Object (Object.prototype)  //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
    console.log(jonas.__proto__.__proto__.__proto__)  //because Object.prototype is usually at the top of prototype chain   //null


console.log(Person.prototype.constructor)  //Person function
console.dir(Person.prototype.constructor) //if we want to inspect that function 

const ar=[23,6,9,8,7,7,9,4]
console.log(ar.__proto__)

console.log(ar.__proto__===Array.prototype) //true 

console.log(ar.__proto__.__proto__==Object.prototype) //true

Array.prototype.unique=function(){
   return [... new Set(this)];

};

console.log(ar.unique()) //[23, 6, 9, 8, 7, 4]


//function prototype
console.dir(x=>x+1) 

const f1=function(x){return x+1}
console.log(f1.__proto__)
//function is also an object so it has prototype . That's why we can call methods on function 
