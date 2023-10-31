/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr=["I","V","X","L","C","D","M"];
    let sol=[1,5,10,50,100,500,1000];
    let sum=0;
    for(let i=s.length-1;i>=0;i--){
    for(let j=0;j<arr.length;j++){
      if(s[i]==arr[j] &&j!=0 &&  (sol[arr.indexOf(s[i-1])] < sol[arr.indexOf(s[i])])){
      // sum=sum+sol[j]-sol[j-1];
      sum=sum+sol[arr.indexOf(s[i])]-sol[arr.indexOf(s[i-1])]
       i=i-1
       //console.log(sum)
       }
       else if(s[i]==arr[j]){
           sum+=sol[j];
           //console.log(sum)
       }
       //console.log(sum)
       
    }
       }   
       return sum;
};
//console.log(romanToInt("MCMXCIV"));



