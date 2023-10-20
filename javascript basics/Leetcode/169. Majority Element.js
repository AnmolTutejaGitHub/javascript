var majorityElement = function(nums) {
    const track=new Map();
    
    for(let i=0;i<nums.length;i++){
        let count=0;
        for(let j=0;j<nums.length;j++){  //changed j=i with j=1
            if(nums[i]==nums[j])
            ++count;
        //console.log(count)
            
        }
     track.set(nums[i],count)
    }
    //console.log(track)
    let max=0;
    let maxkey=0
    for(const [key,value] of track.entries()){
        if(value>max){
            max=value
            maxkey=key
        //   console.log(max,maxkey)
        }     
    }

    // let counts=0;
    // for(const num of nums){
    //     if(num==maxkey)
    //     counts++;
    // }
    // if(counts>((nums.length)/2))
      return maxkey;
   
};
