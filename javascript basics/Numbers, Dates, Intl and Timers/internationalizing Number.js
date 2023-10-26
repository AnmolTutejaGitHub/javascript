//internationalizing Number
const num=3884764.23;   //number representation in different countries
console.log("US: ",new Intl.NumberFormat("en-us").format(num));  //US:  3,884,764.23
console.log("Germany: ",new Intl.NumberFormat("de-DE").format(num)); //Germany:  3.884.764,23
console.log("India: ",new Intl.NumberFormat("en-IN").format(num)); //India:  38,84,764.23

//console.log(navigator.language,new Intl.NumberFormat(navigator.language).format(num))

const options={
    style:"unit",
    unit:"mile-per-hour"
}
console.log("US: ",new Intl.NumberFormat("en-us",options).format(num)); //US:  3,884,764.23 mph

//can do in options object
//1.//style:'unit',
   //unit:'celcius
//2.//style:"percent"
//3.//style:"currency",
//currency:EUR       //format number in eur
//useGrooping:false;  //number will be printed without seperators
//note : this currenty will tell usd or ind ,   million or crore will depend on locale 
//currency formatting has nothing to do with locale 


