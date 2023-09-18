const jonas={
    firstname:'jonas',
    lastname:'Schmedtmann',
    age :  2023-1991,
    job: 'teacher',
    friends:['Michael','peter','steven']
};

//Dot notation
console.log(jonas.lastname);  //cant put expression here in dot notation

//Bracket notation
console.log(jonas['lastname'])
//can also put expression here
const namekey='name';
console.log(jonas['first'+namekey]) //expression to evaluate

//dot notation will show error with this 
//console.log(jonas.'last'+namekey)
