//Object spread syntax:
//Object spread syntax allows you to copy the properties of one object into another object. This can be useful for creating new objects or for combining objects. For example, the following code will create a new object with the properties of the person object and the age property set to 30:

const person = { name: "John Doe" };
const newPerson = { ...person, age: 30 };
console.log(newPerson); // { name: "John Doe", age: 30 }
