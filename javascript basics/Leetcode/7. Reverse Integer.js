/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xcpy=x;
    let rem=0;
    while(x){
        rem=rem*10 +x%10;
        x=parseInt(x/10);
    }
    if(rem>=(2**31 -1)|| rem<=((-2)**31)){
        return 0;
    }
    
    return rem;
};
//console.log(reverse(1534236469))
//console.log(2147483647>1534236469)