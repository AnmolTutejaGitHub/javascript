const friends=['Michael','Stephen','Peter'];
console.log(friends);

//another way to declare array
//const years= new Array[1991,1984,1976];  //new-- keyword , Array-- we are declaring an array

console.log(friends[0])
console.log(friends.length)
console.log(friends[friends.length -1]) //last element of array

//mutate the array
friends[0]='jay';
console.log(friends)

//mutate array
friends[0]='jay';

//but can't do this 
//see nb
//friends=['bob','modi']; as array is const declared

//Arrsy inside an array
const jonas=['jonas','Schmedtman',2023-1991,'teacher',friends] //friends array inside jonas array
console.log(jonas);
console.log(jonas.length)

