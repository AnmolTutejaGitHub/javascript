const jonas={
    firstname:'jonas',
    lastname:'Schmedtmann',
    age :  2023-1991,
    job: 'teacher',
    friends:['Michael','peter','steven'],
    calcAge:function(birthYear){ //function expression (as function expression is a value)
        return 2023-birthYear
    }
};

//Accessing using dot notation
console.log(jonas.calcAge(1991))

//using bracket notation
console.log(jonas['calcAge'](1991))  
