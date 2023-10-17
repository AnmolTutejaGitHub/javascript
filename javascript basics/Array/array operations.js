//Push method -- add elements to the  end of the array and returns the length of the array
const friends =['Micheal','joy','anmol'];
const newlength=friends.push('jason');
console.log(friends);
console.log(newlength);

//unshift method -- adds elements to the starting of the array
friends.unshift('John Cena');
console.log(friends);


//remove elements from array
//pop method -- removes last  element of the array and returns the removed element 

const popped=friends.pop();
console.log(popped);
console.log(friends)


//shift method
friends.shift();
console.log(friends);


//indexOf method --returns index of the element
console.log(friends.indexOf('joy'));
//will return -1 if the element is not present in the array
console.log(friends.indexOf('Sham'));

//includes method ; returns true if the element is present in the array and false iif it isn't 
console.log(friends.includes('joy'));
//does strict equaltiy check
friends.push('23');
console.log(friends.includes(23));

//can use includes method in if statements
if(friends.includes('stephen')){
    console.log("You have a friend called stephen");
};

