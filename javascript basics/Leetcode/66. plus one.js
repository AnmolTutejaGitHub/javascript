/**
 * @param {number[]} digits
 * @return {number[]}
 */



var plusOne = function(digits) {
    //console.log(digits)
    //array to string to number then +1 then tostring then array
    let str=digits.join("");
    //console.log(str)
    //let num=Number(str)+1;
    //let num=BigInt(str)+1; error
    let num=BigInt(str)+BigInt(1);
    //let num=str-1+2; // - will automatically convert str to number
    //console.log(num)
    let str2=num.toString();
    //console.log(str2)
    let arr=str2.split('');
    //console.log(arr)


   //can't do digits=arr directly because it willl not modify original digits but will create a copy of it(not same memory address) then assign to it ... so use loop
    for(let i=0;i<arr.length;i++){
        digits[i]=arr[i]
    }
    //console.log(digits)
    return digits;
};

// let a=plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]) 
// console.log(a)



/// earlier i was doing 

// var plusOne = function(digits) {
//     for(let i=0;i<digits.length;i++){
//         if(i==digits.length-1) {
//            // console.log(digits[i])
//             digits[i]=digits[i]+1
//             if(digits[i]>9)
//         {
           
//             digits.push((digits[i]+1)/10)
//             digits.push((digits[i]+1)%10)
//             break;
//         }}
//     }
//     return digits
// };


// let a=plusOne([9]) //[10, 1.1, 1]
// console.log(a)
// // plusOne([1,2,3])