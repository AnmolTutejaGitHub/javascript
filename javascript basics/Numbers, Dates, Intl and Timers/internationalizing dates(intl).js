//internationalizing dates (intl)

const now=new Date()

//const output=new Intl.DateTimeFormat("en-US")   //"en-US" is local string , en is language , US is country 
//above has created a formatter for e language and for country US
//on this formatter we can call .format //.format(now)
const output=new Intl.DateTimeFormat("en-US").format(now)
console.log(output) //10/26/2023   //MM/DD/YYYY usa format 
// 10/26/2023 will be format of output 
const output2=new Intl.DateTimeFormat("en-uk").format(now)
console.log(output2)  //26/10/2023


//if we want in our specific format then do 
const options={
    hour:"numeric",
    minute:"numeric",
    day:"numeric",
    month:"numeric",
    //month:"long",  //eg August
    //month:"2-gidit" //08
    year:"numeric",  //2023
    //year:"2-digit" //23
    weekend:"long" //wednesday   //cann also use short,narrow
}
const output3=new Intl.DateTimeFormat("en-us",options).format(now);
console.log(output3); //10/26/2023, 3:12 PM


//in many situations we don't defined local string manually but to get it from user 
const locale=navigator.language;
console.log(locale) //en-IN
const output4=new Intl.DateTimeFormat("en-us",options).format(now);
console.log(output4); //10/26/2023, 3:14 PM

