//implicit corecion


let result = "The answer is " + 42;
console.log(result); // "The answer is 42"




if ("hello") {
    console.log("This is truthy");
  }
  // Output: "This is truthy" because non-empty strings are truthy.
  
  if (0) {
    console.log("This is truthy");
  } else {
    console.log("This is falsy");
  }
  // Output: "This is falsy" because 0 is falsy.

  

  console.log(5 == "5"); // true, because "5" is implicitly converted to 5



//   let num = 42;
// let str = String(num);
// console.log(str); // "42"





let str = "3.14";
let num = Number(str);
console.log(num); // 3.14
