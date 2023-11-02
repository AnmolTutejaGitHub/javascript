//searching algorithm
function linear_search(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val) return i;
    }
    return -1
}
console.log(linear_search([1,2,34,5,67,7,89,9,69],69));