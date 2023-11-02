// //Bubble sort in javascript

// //dummer way:-
// function bubbleSort(arr){
//     for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr.length;j++){
//             console.log(arr,arr[j],arr[j+1]) //to see iteration
//             if(arr[j]>arr[j+1]){
//                 //SWAP
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//         console.log("one iteration completed!")
//     }
//     return arr;
// }
// console.log(bubbleSort([1,79,28,56,0,-9,15])) //[-9, 0, 1, 15, 28, 56, 79]

// /*
// (7) [1, 79, 28, 56, 0, -9, 15] 1 79
// (7) [1, 79, 28, 56, 0, -9, 15] 79 28
// (7) [1, 28, 79, 56, 0, -9, 15] 79 56
// (7) [1, 28, 56, 79, 0, -9, 15] 79 0
// (7) [1, 28, 56, 0, 79, -9, 15] 79 -9
// (7) [1, 28, 56, 0, -9, 79, 15] 79 15
// (7) [1, 28, 56, 0, -9, 15, 79] 79 undefined
// one iteration completed!

// (7) [1, 28, 56, 0, -9, 15, 79] 1 28
// (7) [1, 28, 56, 0, -9, 15, 79] 28 56
// (7) [1, 28, 56, 0, -9, 15, 79] 56 0
// (7) [1, 28, 0, 56, -9, 15, 79] 56 -9
// (7) [1, 28, 0, -9, 56, 15, 79] 56 15
// (7) [1, 28, 0, -9, 15, 56, 79] 56 79
// (7) [1, 28, 0, -9, 15, 56, 79] 79 undefined
// one iteration completed!

// (7) [1, 28, 0, -9, 15, 56, 79] 1 28
// (7) [1, 28, 0, -9, 15, 56, 79] 28 0
// (7) [1, 0, 28, -9, 15, 56, 79] 28 -9
// (7) [1, 0, -9, 28, 15, 56, 79] 28 15
// (7) [1, 0, -9, 15, 28, 56, 79] 28 56
// (7) [1, 0, -9, 15, 28, 56, 79] 56 79
// (7) [1, 0, -9, 15, 28, 56, 79] 79 undefined
// one iteration completed!

// one iteration completed!
// (7) [1, 0, -9, 15, 28, 56, 79] 1 0
// (7) [0, 1, -9, 15, 28, 56, 79] 1 -9
// (7) [0, -9, 1, 15, 28, 56, 79] 1 15
// (7) [0, -9, 1, 15, 28, 56, 79] 15 28
// (7) [0, -9, 1, 15, 28, 56, 79] 28 56
// (7) [0, -9, 1, 15, 28, 56, 79] 56 79
// (7) [0, -9, 1, 15, 28, 56, 79] 79 undefined
// one iteration completed!

// (7) [0, -9, 1, 15, 28, 56, 79] 0 -9
// (7) [-9, 0, 1, 15, 28, 56, 79] 0 1
// (7) [-9, 0, 1, 15, 28, 56, 79] 1 15
// (7) [-9, 0, 1, 15, 28, 56, 79] 15 28
// (7) [-9, 0, 1, 15, 28, 56, 79] 28 56
// (7) [-9, 0, 1, 15, 28, 56, 79] 56 79
// (7) [-9, 0, 1, 15, 28, 56, 79] 79 undefined
// one iteration completed!

// (7) [-9, 0, 1, 15, 28, 56, 79] -9 0
// (7) [-9, 0, 1, 15, 28, 56, 79] 0 1
// (7) [-9, 0, 1, 15, 28, 56, 79] 1 15
// (7) [-9, 0, 1, 15, 28, 56, 79] 15 28
// (7) [-9, 0, 1, 15, 28, 56, 79] 28 56
// (7) [-9, 0, 1, 15, 28, 56, 79] 56 79
// (7) [-9, 0, 1, 15, 28, 56, 79] 79 undefined
// one iteration completed!

// (7) [-9, 0, 1, 15, 28, 56, 79] -9 0
// (7) [-9, 0, 1, 15, 28, 56, 79] 0 1
// (7) [-9, 0, 1, 15, 28, 56, 79] 1 15
// (7) [-9, 0, 1, 15, 28, 56, 79] 15 28
// (7) [-9, 0, 1, 15, 28, 56, 79] 28 56
// (7) [-9, 0, 1, 15, 28, 56, 79] 56 79
// (7) [-9, 0, 1, 15, 28, 56, 79] 79 undefined
// one iteration completed!
// */ 


// //see u can avoid iteration first this comparison with undefined 
// //and the if  ......   ....  this .... go to that place by our loop by sorting why looping oveer them 

//a better way
function bubbleSort(arr){
    for(var i=arr.length;i>0;i--){
        for(var j=0;j<i-1;j++){  //changed condition from j<arr.length to j<i-1 so j goes down each time with i 
            console.log(arr,arr[j],arr[j+1]) //to see iteration
            if(arr[j]>arr[j+1]){
                //SWAP
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        console.log("one iteration completed!")
    }
    return arr;
}
console.log(bubbleSort([1,79,28,56,0,-9,15])) //[-9, 0, 1, 15, 28, 56, 79]
/*
(7) [1, 79, 28, 56, 0, -9, 15] 1 79
(7) [1, 79, 28, 56, 0, -9, 15] 79 28
(7) [1, 28, 79, 56, 0, -9, 15] 79 56
(7) [1, 28, 56, 79, 0, -9, 15] 79 0
(7) [1, 28, 56, 0, 79, -9, 15] 79 -9
(7) [1, 28, 56, 0, -9, 79, 15] 79 15
one iteration completed!

(7) [1, 28, 56, 0, -9, 15, 79] 1 28
(7) [1, 28, 56, 0, -9, 15, 79] 28 56
(7) [1, 28, 56, 0, -9, 15, 79] 56 0
(7) [1, 28, 0, 56, -9, 15, 79] 56 -9
(7) [1, 28, 0, -9, 56, 15, 79] 56 15
one iteration completed!

(7) [1, 28, 0, -9, 15, 56, 79] 1 28
(7) [1, 28, 0, -9, 15, 56, 79] 28 0
(7) [1, 0, 28, -9, 15, 56, 79] 28 -9
(7) [1, 0, -9, 28, 15, 56, 79] 28 15
one iteration completed!

(7) [1, 0, -9, 15, 28, 56, 79] 1 0
(7) [0, 1, -9, 15, 28, 56, 79] 1 -9
(7) [0, -9, 1, 15, 28, 56, 79] 1 15
one iteration completed!

(7) [0, -9, 1, 15, 28, 56, 79] 0 -9
(7) [-9, 0, 1, 15, 28, 56, 79] 0 1
one iteration completed!

(7) [-9, 0, 1, 15, 28, 56, 79] -9 0
one iteration completed!

*/

//More optimised approach 
// say in a full iteration(one iteration completed!) swapping didn't happen 
//this means array if sorted or bought to sorted by previous iterations 
//so no need to loop over break out 
//good for almost sorted array
console.log("Here")
function bubbleSort2(arr){
    var noSwaps;
    for(var i=arr.length;i>0;i--){
        noSwaps=true;
        for(var j=0;j<i-1;j++){  //changed condition from j<arr.length to j<i-1 so j goes down each time with i 
            console.log(arr,arr[j],arr[j+1]) //to see iteration
            if(arr[j]>arr[j+1]){
                //SWAP
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwaps=false
            }
        }
        console.log("one iteration completed!")
        if(noSwaps) break
    }
    return arr;
}
console.log(bubbleSort2([2,78,4,8,9,12,56]))   
/*
(7) [2, 78, 4, 8, 9, 12, 56] 2 78
(7) [2, 78, 4, 8, 9, 12, 56] 78 4
(7) [2, 4, 78, 8, 9, 12, 56] 78 8
(7) [2, 4, 8, 78, 9, 12, 56] 78 9
(7) [2, 4, 8, 9, 78, 12, 56] 78 12
(7) [2, 4, 8, 9, 12, 78, 56] 78 56
one iteration completed!

(7) [2, 4, 8, 9, 12, 56, 78] 2 4
(7) [2, 4, 8, 9, 12, 56, 78] 4 8
(7) [2, 4, 8, 9, 12, 56, 78] 8 9
(7) [2, 4, 8, 9, 12, 56, 78] 9 12
(7) [2, 4, 8, 9, 12, 56, 78] 12 56
one iteration completed!
*/