//Sets
//In ES6 two more data structures were introduced :sets , maps

//creating a new object 
//Sets takes any iterables
const ordersSet= new Set(['pasta','pizza','pizza','pizza','Risotto','pizza'])
console.log(ordersSet) // {'pasta','pizza','risotto'}

//just like arrays , sets are also iterables 
//however order of element in set is irrevelent 

//strings are also iterables 
//so we can also do this 
console.log('Anmol') //{'A','n','m','o','l'}

//Size of a set
console.log(ordersSet.size);

//we can also check if a certain element is present in a Set
//has() method 
console.log(ordersSet.has("Pizza")) //output : true
console.log(ordersSet.has("Bread")) //output : false 

// we can also add and delete elements from the sets
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
console.log(ordersSet)

// //method to delete all the elements of the set
// ordersSet.clear()
// console.log(ordersSet) //{}

//looping over Sets
for(const order of ordersSet){
    console.log(order)
}

//using set to remove duplicate element from an array
const staff=['waiter','chef','waiter','manager','chef','waiter']
const staffUnique=new Set(staff);
console.log(staffUnique) //output: {'waiter','chef','manager'}
//if we want output to be an array 
//note: spread operator works on all iterables
const ArrStaffUnique=[... new Set(staff)];
console.log(ArrStaffUnique)


//counting different letters in a string
console.log(new Set('Anmol').size)




