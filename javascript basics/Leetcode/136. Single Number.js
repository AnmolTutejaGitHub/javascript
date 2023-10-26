/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        let count=0;
       for(let j=0;j<nums.length;j++)
       {
           if(nums[i]==nums[j]){
               count++;
               map.set(nums[i],count)
           }
       }
    }
    for(const [key,value] of map){
        if(value==1){
            return key
        }
    }
};

