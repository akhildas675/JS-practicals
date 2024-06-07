// // Function definition
// function findMaxValue(numbers) {
//     var max;
//     for(let x of numbers){
//         if(x>max){
//             max=x
//         }
//         return max
//     }

// const { log } = require("console");

    
// }

// // Test the function
// const arr = [12, 5, 27, 8, 15, 20];
// console.log(findMaxValue(arr)); // Output: 27




let arr = [1, 2, 3, 4, 5, 6, 7,8];

// for (let x of arr) {
//     if (x % 2 === 0) {
//         console.log(x + ' is even');
//     } else {
//         console.log(x + ' is odd');
//     }
// }

let sum=0;
for(let i of arr){
sum+=i
}
console.log(sum);

