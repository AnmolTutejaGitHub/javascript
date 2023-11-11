//Object.create

//object literals
const PersonProto={
    calcAge(){
        console.log(2037-this.birthYear)
    },
}

const steven=Object.create(PersonProto)
//this will retur an object  that is linked to the prototype that we passed in here 

console.log(steven) //{}
//steven is an empty object with calcAge method

//settiing properties like we set properties of object literals 
steven.name="Steven"
steven.birthYear=2002
steven.calcAge() //35

console.log(steven.__proto__===PersonProto) //true
//as we do const steven=Object.create(personProto)
//we set explicitly that PersonProto is going to be prototype of steven object 



//There is a more programatic waay of setting propwerties

// note : in this way there is no new keyword 

const PersonProto2={
    calcAge(){
        console.log(2037-this.birthYear)
    },

    init(firstName,birthYear){
        this.firstName=firstName
        this.birthYear=birthYear
    }

};

const sarah=Object.create(PersonProto2)
//PersonProto2 is set as prototype for sarah object 

sarah.init("Sarah",1979) //58

console.log(sarah) //{firstName: 'Sarah', birthYear: 1979}

sarah.calcAge()


//this has nothing to do with constructor function or constructor method we had in ES6 class, no new keyword 
