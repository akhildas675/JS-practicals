const complexJsonString = '{"name": "John", "age": 30, "city": "New York", "skills": ["JavaScript", "Node.js", "MongoDB"]}';

// Parse the complex JSON string into a JavaScript object
const personObject = JSON.parse(complexJsonString);

// Accessing properties of the resulting JavaScript object
// console.log(`Name: ${personObject.name}`);
// console.log(`Age: ${personObject.age}`);
// console.log(`City: ${personObject.city}`);
// // console.log('Skills:', personObject.skills.join(', '));
console.log(personObject);