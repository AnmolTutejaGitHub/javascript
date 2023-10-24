
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     const arr=[]
//     for(const num of nums){
//         if(num!=val){
//         arr.push(num)}
//     }
//     nums=arr
//     return nums //.length
// };
// const result=removeElement([0,1,2,2,3,0,4,2],2)
// console.log(result)
//above not working because leetcode expects me to retrnn nums modified at same memory positio not a copy 

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //for(let i=0;i<nums.length;i++)
        const arr=[]
for(const num of nums){
if(num!=val){
arr.push(num)}
}
    nums.splice(0, nums.length);
    //nums=new Array(...arr)
    nums.push(...arr)
    return nums.length //arr.length
};



// function removeElement(nums, val) {
//     // Counter for keeping track of elements other than val
//     let count = 0;
//     // Loop through all the elements of the array
//     for (let i = 0; i < nums.length; i++) {
//         // If the element is not val
//         if (nums[i] !== val) {
//             nums[count++] = nums[i];
//         }
//     }
//     return count;
// }