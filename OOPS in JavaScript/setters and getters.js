//Setters and getters 

const account={
    owner:"jonas",
    movements:[200,530,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
};


//get
console.log(account.latest)   //300


//set
account.latest=50  //we set the property
console.log(account.movements);  //[200, 530, 120, 300, 50]



//Setters and getters can be useful for Data Validation 


class PersonCl{
    constructor(fullName,birthYear){
        this.fullName=fullName;
        this.birthYear=birthYear;
    }

    calcAge(){
        console.log(2037-this.fullName)
    }
      

    //setting property that already exist

    // set fullName(name){
    //     if(name.includes(" ")) this.fullName=name
    //     else alert(`${name} is not a full name`)
    // }

    set fullName(name){
        if(name.includes(" ")) this._fullName=name
        else alert(`${name} is not a full name`)
    }


    get fullName(){
        return this._fullName
    }
}

const jessica= new PersonCl("Jessica Devis",1998)
console.log(jessica)  //PersonCl {_fullName: 'Jessica Devis', birthYear: 1998}
console.log(jessica.fullName)