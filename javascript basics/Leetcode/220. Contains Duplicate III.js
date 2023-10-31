/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
//Brute Force Approach can be optimised by adding break statement
// no need to go further as index difference should be less than indexDiff
     if (Math.abs(i - j) > indexDiff) break;
            if(i != j && Math.abs(i - j) <= indexDiff && Math.abs(nums[i] - nums[j]) <= valueDiff ) return true
        }
    }
    return false
};