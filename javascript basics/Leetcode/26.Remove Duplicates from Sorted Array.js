/**
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function(nums) {
//     let arr=[]
//     for(let i=0;i<nums.length;i++){
//         if(!arr.includes(nums[i])){
//             arr.push(nums[i])
//         }
//     }
    
//     return arr;
// };
//console.log(removeDuplicates([1,1,2]))


//wants me to return original array after deleting 

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     let arr=[]

//     let lenN=nums.length
//     for(let i=0;i<lenN;i++){
//         if(!arr.includes(nums[i])){
//             arr.push(nums[i])
//         }
//     }
//     return nums;

// };
// console.log(removeDuplicates([1,1,2]))
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(!arr.includes(nums[i])){
            arr.push(nums[i])
        }
    }
    nums.splice(0,nums.length)
    nums.push(...arr)
    return nums.length;
};