class Solution(object):
    def maxProduct(self, nums):
       
       i=0
       max=0
       for num in nums:
           #i=0
           j=i+1
           
           for num2 in nums:
               if(j>=len(nums)):
                 break
               #j=i
               
               
               if(max<((nums[i]-1)*(nums[j]-1))):
                max=(nums[i]-1)*(nums[j]-1)
               j+=1
           i+=1
       return max
