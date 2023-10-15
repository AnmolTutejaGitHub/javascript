//Functions accepting callback functions 

const oneWord=function(str){
    return str.replace(/ /g,"").toLowerCase();
}


const upperFirstWord=function(str){
    const[first,...others]=str.split(" ")
    return[first.toUpperCase(),...others].join(" ")
};

//higher order function
const transformer=function(str,fn){
    console.log(`original string : ${str}`);
    console.log(`Transformed string : ${fn(str)}`);
    console.log(`Transformed by ${fn.name}`) //.name function method
}

transformer("JavaScript is the best",upperFirstWord) //didnt call upperFirstWord() here
transformer("JavaScript is the best",oneWord) 