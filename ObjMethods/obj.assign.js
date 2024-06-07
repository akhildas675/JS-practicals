// Object.assign(target, ...sources):
// Copies the values of all enumerable own properties from one or 
// more source objects to a target object and returns the target object



let obj1 = {name: "Navyendhu", age :25}
let obj2 = {place:"Kochi", YOB:1999}
const newObj = Object.assign({}, obj1, obj2);
console.log(newObj);