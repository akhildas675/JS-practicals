// Object.freeze(obj):
// Freezes an object: other code cannot delete or change any properties

let obj = {name: "Navyendhu", age:25}


Object.freeze(obj)

// cant be reassigned/updated
obj.age = 6

// cant be removed or deleted
delete obj.age 

console.log(obj)