// Object.seal(obj):
// Seals an object: other code cannot add or 
// delete properties, though existing properties can still be modified.


let obj = {name: "Navyendhu", age: 25}

Object.seal(obj)

// cant add new key values
obj.YOB = 1999 

// cannot delete anything
delete obj.Name 

// Can reassign values
obj.age = 26

console.log(obj)