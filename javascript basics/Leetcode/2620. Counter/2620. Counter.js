// // function counter(i) {
// //     i++;
// //     return i
// // };


// // let n=prompt()

// // //let arr=prompt()
// // //inputting array from user
// // const userInput = prompt();
// // const userArray = userInput.split(',');
// // let arrlen=userArray.length
// // //let n=10
// // let i=n-1

// // while(arrlen){
// //     i=counter(i)
// //     console.log(i)
// //     arrlen--;
// // }

// // // i=counter(i)
// // // console.log(i)  //11
// // // i=counter(i)
// // // console.log(i)  //12
// // // i=counter(i)
// // // console.log(i)  //13

// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// function counter(n) {
//     i=n-1;
//     return function(){
//       i++;
//     return i
//     } 
// };


// // let n=prompt()

// // //let arr=prompt()
// // //inputting array from user
// // const userInput = prompt();
// // const userArray = userInput.split(',');
// // let arrlen=userArray.length
// // //let n=10
// // let i=n-1

// // while(arrlen){
// //     i=counter(i)
// //     console.log(i)
// //     arrlen--;
// // }


/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
    i=n-1;
 return function() {
      i++;
   return i
 } 
 };