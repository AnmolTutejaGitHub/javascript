//ES6 classes

class PersonCl{
    constructor(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }

    //Methods will be added to .prototype property
    calcAge(){
        console.log(2037-this.firstName)
    }
}

const jessica= new PersonCl("Jessica",1998)
console.log(jessica) //PersonCl {firstName: 'Jessica', birthYear: 1998}

console.log(jessica.__proto__ === PersonCl.prototype) //true


PersonCl.prototype.greet=function(){
    console.log(`Hey ${this.firstName}`)
}

jessica.greet()  //Hey Jessica

