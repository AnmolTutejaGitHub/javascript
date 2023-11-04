/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //sorting first then kth element from last note i have too handle the repeated values so it may not be kth from last

////bubble sort giving til(37/41 passed) so using inbuilt sort
    // //bubble sort 
    // function bubbleSort(arr){
    // var noSwaps;
    // for(var i=arr.length;i>0;i--){
    //     noSwaps=true;
    //     for(var j=0;j<i-1;j++){  //changed condition from j<arr.length to j<i-1 so j goes down each time with i 
    //         if(arr[j]>arr[j+1]){
    //             //SWAP
    //             var temp=arr[j];
    //             arr[j]=arr[j+1];
    //             arr[j+1]=temp;
    //             noSwaps=false
    //         }
    //     }
    //     if(noSwaps) break
    // }
    // return arr;
//}
//arr is the sorted arr
//numsSorted=bubbleSort(nums);

nums.sort((a, b) => a - b);

//finding kth largest element from numsSorted .. if no repetition numsSorted.length-1-k is answer

//return numsSorted[numsSorted.length-k]
return nums[nums.length-k]
 
};
