let array=[1,2,3,4,5,6,7,1]
// // do1uble

// function do1uble(x) {
//     return x * 2;
// }
// const output = array.map(do1uble)
// console.log(output);




// ------------------------------------------



// binary 

// function binar1y(x){
//     return x.toString(2);
// }
// const output1 = array.map(binar1y)
// console.log(output1)



// ----------------------------------------

// let r = array.map((x)=>{
//    return  x*x
// })
// console.log(r);



// --------------------------




// const arra =[10,23,4,34]

// function ony(v){
//     return v*v
// }
// const res= arra.map(ony)
// console.log(res)



// --------------------------




// const array = [1, 2, 3, 4, 5]
// const newArray = array.map(num => num * num);
// console.log(newArray)




// -------------------------------------





// const arr2=[1,1,2,3,4,5]

// const newArr=arr2.map((num2)=>{
//     return num2*num2
// })

// console.log(newArr)


// const nre = arr2.map((val)=>{
//     return val+2
// })

// console.log(nre);


// ---------------------------------NOTES-----------------------------------------------------------------------------------
                        //    map vs forEach
// map(): Creates a new array by applying a function to each element of the original array.
// forEach(): Executes a function for each element of the array, but does not create a new array.
// map(): Returns a new array with the transformed elements.
// forEach(): Returns undefined.


// ---------------------------


// 1 Use flatMap(function) for data transformation and flattening operations. ransforms each element of an array into a new array, then flattens the resulting arrays into a single, one-dimensional array.
// 2 Use HashMap(data structure): for general-purpose key-value storage and fast lookups.allowing for fast retrieval of values based on keys.
// 3 Use WeakMap(data structure) when you need to store data associated with objects without preventing garbage collection of those objects.
// 4 use WeakSet to  Stores a collection of unique objects, allowing for garbage collection of objects within the set.


// 1. flatMap :
// const numArr =[1,2,3,4,5]
// const resulter = numArr.flatMap((x)=>{
//     return [x ,x*2]
// })

// console.log(resulter);



// 2 .HashMap

// General-purpose key-value storage, 

// const myHashMap = new HashMap();
// myHashMap.put("name", "Alice");
// myHashMap.put("age", 30);
// console.log(myHashMap.get("name")); // Output: "Alice"


// 2 .WeakMap


let map = new Map ([["a1","joel"],["a2","josea"]])

console.log(map);





