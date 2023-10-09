//Enhanced object literals 
//From ES6 3 enhanced object literals were introduced in javascript
//1st one :

//Earlier
//passing an object into another object
const time={
    mon:{
        open:24,
        close:12,
    },
    tue:{
        open:23,
        close:11,

    },
}

const restaurant={
    names:"The Endgames",

    time:time, //property and variable name same
}
console.log(restaurant)

//with ES6 enhanced object literals
const restaurant1={
    names:"The Endgames",

    time,
}
console.log(restaurant1)


//2nd enhancement  - New way of writing Methods
const marvel={
    names:'U and I',
    era:2023,

    thanos1:function(names,era){
    console.log(`Thanos decided to delete ${names} in ${era}`)
    },
    //with ES6 enhanced object literals we can do
    thanos2(names,era){
        console.log(`Thanos decided to delete ${names} in ${era}`)
        },
};
console.log(marvel);


//3rd enhancement
const weekdays=['mon','tue','wed','thu','fri','sat','sun']
const restaurant3={
    names:"The Endgames",

    time:{
        // mon:{
        //     open:24,
        //     close:12,
        // },
        //now can do
        [weekdays[0]]:{
            open:24,
            close:12,
        },
        // tue:{
        //     open:23,
        //     close:11,
    
        // },

        [weekdays[1]]:{   //[     ] can put any expression here and that ewill be evaluated, [    ]  not for array here
            open:23,
           close:11,
        },
        //example of can put any expression
        [`days${2+4}`]:{
            open:'anytime',
            close:'notime',

        },
    },
};
console.log(restaurant3)