
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    arr=[]
    for(const num of nums){
        if(arr.includes(num)==false){
       arr.push(num)}
    }

return ! (nums.every((element, index) => element === arr[index]));
    
};


//POV

// var containsDuplicate = function(nums) {
//     let arr=[]
//     for(const num of nums){
//         if(arr.includes(num)==false){
//        arr.push(num)
//        console.log(arr)}
//     }

//     return nums!=arr
    
// };

// console.log(containsDuplicate([1,2,3,4]))

///will show wrong results


// let a1=[1,2,3,4]
// let a2=[1,2,3,4]
// console.log(a1==a2)  //false 


// In JavaScript, when you compare two arrays using the == operator, you are comparing their references, not their contents. This means that a1 and a2 in your example are two different array objects, even though they have the same elements.

// To compare the contents of two arrays for equality, you should use a loop or a method like every() to check if all elements in one array match the corresponding elements in the other array.

// let a1 = [1, 2, 3, 4];
// let a2 = [1, 2, 3, 4];

// function arraysAreEqual(arr1, arr2) {
//   return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
// }

// console.log(arraysAreEqual(a1, a2)); // true


