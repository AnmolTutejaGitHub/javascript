/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let countP=0;
    let countN=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0) countP++;
        if(nums[i]<0) countN++;
    }
    let max;
    if(countP>countN) max=countP
    else max=countN
    return max
};
