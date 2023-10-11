//map datatype
//easiest way to create map is to create empty map like this 
const rest=new Map()

//to fill map we can use .set method
rest.set('name','italiano caris') // key , value
rest.set(1,'Firenze, italy') //in object it has to be string in map we can put any value(like in this case 1)

//.set not only adds but also returns the map
console.log(rest.set(2,'lisbon , putugal')) //{'name'=>"italino caris", 1=>"Firenze, italy" ,2=>"lisbon , putugal"}


//As set return updated value we caan do this :
// rest.set('categories',['Italian','pizzeria','vegetarian','organic']).set("open",11).set('close',23).set(true,'we are open:D').set(false,'we are closed')
//better way of above
rest
  .set('categories',['Italian','pizzeria','vegetarian','organic'])
  .set("open",11).set('close',23)
  .set(true,'we are open:D')
  .set(false,'we are closed')

  console.log(rest)


  //To read data from map we can do this
  //get method

  console.log(rest.get('nane')); //input:key ,output:italiano caris
  console.log(rest.get(true));// we are open:D


  const time=21;
  console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));


  //checking if method has certain keys
  console.log(rest.has('categories'))

  //deleting a key,value pair from map 
  console.log(rest.delete(2))
  console.log(rest)


//size
consoler.log(rest.size)
//rest.clear()

//we can use arrays or objects as map keys
rest.set([1,2],'test')
//[1,2] -- key
//test -- value

console.log(rest.get([1,2])) //undefined as this [1,2] and the above [1,2] are different objects in heap

//instead we can do this 
const arr=[1,2]
rest.set(arr,'test')
console.log(rest.get(arr)); //both arr refer to same element 

