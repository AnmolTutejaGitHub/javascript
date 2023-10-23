// Array Methods Practice

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];





// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  //.reduce((count, cur) => (cur >= 1000 ? count+1 : count), 0);
  //.reduce((count, cur) => (cur >= 1000 ? count++ : count), 0);  //will show 0  //count++ increased the value of count by 1 but result of `count++` expression is still 0 
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;   
console.log(a++); //10     a++ does in deed increment the value but returns the previous value 
console.log(a); //11

console.log(++a);
console.log(a);


//count++ increased the value of count by 1 but result of `count++` expression is still 0 

// 3.  can use reduce method to create an object even 
//const sums= accounts  
const { deposits, withdrawals } = accounts  //destructuring to be used in   console.log 
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);    //{ deposits: 0, withdrawals: 0 } is nothing but starting value of  sums object .. thats's why sum.deposits  //remember sums.deposits dot notation of accessing value of a key 
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums; //in the end we need to return the accumulator 
    },
    { deposits: 0, withdrawals: 0 }   //starting pt. of accumulator needs to be an object here 
  );

console.log(deposits, withdrawals);

// 4. convert any string to a titlecase 
// this is a nice title -> This Is a Nice Title  //note in title case `a` is not converted to titlecase ... these are exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))   // exceptions.includes(word) ? word   means ->// if in exceptions then return the same word 
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));