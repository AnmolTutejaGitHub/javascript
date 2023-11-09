//WeakMaps and WeakRefs:
//JavaScript provides two special data structures called WeakMaps and WeakRefs that are designed to store weak references to objects. A weak reference is a reference that does not prevent the object from being garbage collected. This can be useful for storing objects that are only used for a short period of time. For example, the following code will create a WeakMap that maps strings to their corresponding numbers:
const weakMap = new WeakMap();
weakMap.set("hello", 10);
if (weakMap.has("hello")) {
  console.log(weakMap.get("hello")); // 10
}


