 myObj={
name:"Joel",
age:18,
palce:"Kochi"

}
Object.freeze(myObj)
// Object.seal(myObj)

delete myObj.name

myObj.name="navyendhu"
myObj.yoj=2023
console.log(myObj);





// the Object.seal() and Object.freeze() methods are used to prevent objects from being modified.
// The Object.seal() method prevents the addition of new properties to an object, but it does not prevent the modification of existing properties.
// The Object.freeze() method prevents the addition, removal, or modification of properties on an object.






