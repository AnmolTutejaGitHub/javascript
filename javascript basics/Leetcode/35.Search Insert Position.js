/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target) return i;
        else if(target>nums[i] && target<nums[i+1]) return i+1;
        // else {
        //  for(let j=0;j<nums.length;j++){
        //  if (nums[j]!=target && !(target>nums[j] && target<nums[j+1]) &&nums[j]>nums[i]){
        //     return nums.length
        // }}
  //  }
    } 
    return target > nums[0] ? nums.length : 0
};
