//looping over objects
//we can loop over objects which are not iterables in an indirect way
//we have different options depending upon what exactly we want to loop over : property names , over the values or both
//property names are also called keys

const openingHours = {
   thu: {
      open: 12,
      close: 22,
    },
    fri : {
      open: 11,
      close: 23,
    },
   sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

  for(const day of Object.keys(openingHours)){
    console.log(day)
  }   // output : thu,fri,sat


  //To see what exactly is this Object.keys()
  const properties=(Object.keys(openingHours))
  console.log(properties)  // output : ['thu', 'fri', 'sat']
  //so Object.keys() takes an object and returns the array  of keys/property names of that object 

  //can find length too
  //const properties=(Object.keys(openingHours))
  console.log(`We are open om ${properties.length} days`);

  //see this
  let openStr=`we are open on ${properties.length} days : `
  for(const day of properties){
       openStr+=`${day}`;
  }
  console.log(openStr)  // we are open on 3 days : thu,fri,sat 


//Properties values
const values=Object.values(openingHours);
console.log(values)
//output :   output is object 
// {open:12,close:12}
// {open:11,close:23}
// {open:0,close:24}

//entries //work differently with arrayname.entries()
const entries=Object.entries(openingHours)
console.log(entries)
//output :
//[['fri',{.....}]
// ['thu,{.....}]
// ['sat',{....}]


// for(const x of entries){
//     console.log(...)
// }

//can also do 
// for(const [key,value] of entries){
//     ...
// }

for(const[key,{open,close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`)
};




