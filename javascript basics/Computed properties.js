//Computed properties:
//Computed properties allow you to access or modify properties of an object based on another property. This can be useful for dynamic data access and for creating complex objects. For example, the following code will create an object with a computed property fullName that returns the concatenation of the firstName and lastName properties:
const person = { firstName: "John", lastName: "Doe" };
const { fullName } = person;
console.log(fullName); // John Doe
