

// -------------------------------------------------------------------------------------------------



// -----------for-loop-------------------

// The traditional for loop is used for iterating over a block of code a specific number of times.


for (let i = 0; i < 5; i++) {
  console.log(i);
}

// -----------for-in-------------------

// The for...in loop is used to iterate over the properties of an object.
//  It is not recommended for iterating over arrays due to potential issues with order and inherited properties.




const person = { name: 'John', age: 25 };

for (let key in person) {
  console.log(key, person[key]);
}



// -----------for-each-------------------

// The forEach method is used with arrays to iterate over each element. 
// It is a higher-order function that takes a callback function as an argument.



const numbers = [1, 2, 3, 4];

numbers.forEach(function(number) {
  
  console.log(number);
});

// -----------for-off-------------------


// The for...of loop is used to iterate over iterable objects like arrays,
//  strings, maps, sets, etc. It simplifies the syntax compared to the traditional for loop.



const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(fruit);
}