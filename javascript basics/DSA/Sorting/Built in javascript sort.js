//Built in javaScript sort method

console.log(["Stell","colt","Data Structures","Algorithms"].sort())
//['Algorithms', 'Data Structures', 'Stell', 'colt']

console.log([1,2,5,8,27,16,9].sort()); //[1, 16, 2, 27, 5, 8, 9]
//js will first convert them to string and sort them based on their unicodes

//Telling JavaScript how to sort

//The built in sort method accepts an optional comparator function
//You can use this comparator function to tell javascript how you want it to sort
//The comparator function looks at pair of elements(a and b), 
//determinses their sort order based on thier return value
// if it returns a -ve no., a comes before b
//if it returns a +ve no. , a comes after b
// if it returns 0, a and b are same as far as sort is concerned

//example

function numberCompare(num1,num2) 
{return num1-num2}

console.log([6,4,15,10].sort(numberCompare)); //[4, 6, 10, 15]


//can also do sorting by length of a string 
function compareBylen(str1,str2){
    return str1.length - str2.length;
}
console.log(["Stell","colt","Data Structures","Algorithms"].sort(compareBylen))
//['colt', 'Stell', 'Algorithms', 'Data Structures']

