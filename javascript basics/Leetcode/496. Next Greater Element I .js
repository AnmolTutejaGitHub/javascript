/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans=[]
    for(let j=0;j<nums1.length;j++)
    {
        let found = false;
        for(let i=0;i<nums2.length;i++)
      {
            if(nums2[i]==nums1[j]){
                //console.log(nums2[i],nums1[j])
                for(let k=i+1;k<(nums2.length);k++){
                   // console.log(k)
                    //console.log(`Can you see ${nums1[i]},${nums2[k]}`)
                    if(nums2[k]>nums2[i]){
                        found = true;
                        ans.push(nums2[k])
                        //console.log(nums2[k])
                        break;
                    }
                   // break;
                    }
                    if (found==false) {
                        ans.push(-1);
                        found=false
                    }
                }
            }
            
    }
    return ans
};
