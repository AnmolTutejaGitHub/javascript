//binary search
//binary sort works on sorted array only
//Binary search, also known as a binary chop, is a widely used and efficient algorithm for finding a specific target value within a sorted array or list. It operates by repeatedly dividing the search interval in half. Here's how it works:

// 1.Start with the entire sorted array or list.
// 2.Compare the target value to the middle element of the array.
// 3.If the middle element is equal to the target, you've found your item, and the search is successful.
// 4.If the middle element is greater than the target, discard the right half of the array and repeat the process with the left half.
// 5.If the middle element is less than the target, discard the left half of the array and repeat the process with the right half.
// 6.Repeat steps 2-5 until the target value is found or the search interval becomes empty (i.e., there are no more elements to search).


// Binary search is efficient because it reduces the search space by half with each comparison. It has a time complexity of O(log n), where 'n' is the number of elements in the array. This means that binary search can quickly find items in large datasets, making it much more efficient than linear search (O(n)), which checks each element one by one.
// However, binary search requires that the array is sorted, and if the array is unsorted, you'd need to sort it first, which may take O(n log n) time. So, binary search is most advantageous when you have a sorted dataset and need to perform multiple searches on it.

function binarySearch(arr,elem){
    let start=0;
    let end=arr.length-1;
    let middle=Math.floor((start+end)/2);
    while(arr[middle]!==elem){
        if(elem<arr[middle] && start<=end){
            end =middle-1
        }
        else {
            start=middle+1
        }
        middle=Math.floor((start+end)/2);
        if(arr[middle]==elem) return middle
    }
   
    return -1
}
console.log(binarySearch([2,5,6,9,13,15,28,30],15));
// [2,   5,   6,   9,   13,   15,   28,   30]
//  S              M                      E


