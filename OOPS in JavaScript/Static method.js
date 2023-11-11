//Static method  

//like we do Array.from or  Number.parseInt we call them on constructor function not like arr.from 
//these are called static method


//
const Person=function(firstname,birthYear){
    //instance properties
    this.firstname=firstname;
    this.birthYear=birthYear;

    // instance method
    this.calcAge=function(){
        console.log(2023-this.birthYear)
    }
}
const jonas=new Person("Jonas",1991)

//static method 
Person.hey=function(){
    console.log("hey there")
    console.log(this) //this keyword is constructor function here 
}

//calling 
Person.hey() //hey there
//jonas.hey() //will show error 


//in ES6 classes 
class PersonCl{
    constructor(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }

    //Methods will be added to .prototype property
    calcAge(){
        console.log(2037-this.firstName)
    }

    static hey(){
        console.log("Hey there")
        console.log(this) //this keyword is entire class
    }
}

const jessica= new PersonCl("Jessica",1998)

PersonCl.hey() //hey there
//jessica.hey() //error

