// In JavaScript, both Sets and Maps are iterable, but they are iterated differently.

// Sets:

// Sets are iterable using a for...of loop or by converting them to an array. Here's an example:
const mySet = new Set([1, 2, 3, 4]);

// Using a for...of loop
for (const item of mySet) {
  console.log(item);
}

// Converting to an array and then iterating
const setArray = [...mySet];
for (const item of setArray) {
  console.log(item);
}


// Maps:

// Maps are iterable, but you need to specify whether you want to iterate through the keys, values, or entries. 
//You can do this using the for...of loop or by converting them to an array. Here's an example:
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);

// Iterating through keys
for (const key of myMap.keys()) {
  console.log(key);
}

// Iterating through values
for (const value of myMap.values()) {
  console.log(value);
}

// Iterating through entries (key-value pairs)
for (const entry of myMap.entries()) {
  console.log(entry[0], entry[1]);
}

// Converting to an array and then iterating //destructuring 
const mapArray = [...myMap];
for (const [key, value] of mapArray) {
  console.log(key, value);
}
//can be done directly 
for (const [key, value] of myMap) {
    console.log(key, value);
  }



// Objects in JavaScript are also iterable, but their iteration behavior is a bit different from Sets and Maps. 
//When you iterate through an object, you are iterating over its keys, which are strings.

// Here's how you can iterate through the keys of an object:
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (const key in myObject) {
    console.log(key); // This will output: name, age, city
  }

  
  //You can access the corresponding values of the object using these keys like this:
  for (const key in myObject) {
    console.log(key, myObject[key]); // This will output: name John, age 30, city New York
  }

  
//   Do note that object properties are not guaranteed to be in any specific order in JavaScript,
// and the order of iteration may not be the same as the order in which they were defined.

// If you want to iterate over an object's values directly, you can do so using Object.values():
const values = Object.values(myObject);
for (const value of values) {
  console.log(value); // This will output: John, 30, New York
}


//Or if you want to iterate over both keys and values as pairs, you can use Object.entries():
const entries = Object.entries(myObject);
for (const [key, value] of entries) {
  console.log(key, value); // This will output: name John, age 30, city New York
}






