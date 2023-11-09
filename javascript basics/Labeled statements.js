//Labeled statements:
//Labeled statements can be used to break or continue control flow to a specific label within the code. This syntax can be useful for controlling nested loops or complex control flow structures. For example, the following code will break the innerLoop loop if condition is true:
outerLoop: for (let i = 0; i < 10; i++) {
    innerLoop: for (let j = 0; j < 10; j++) {
      if (condition) {
        break outerLoop;
      }
    }
  }
  