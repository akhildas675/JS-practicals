// function sum(a) {
    
//         return function (c) {
//             return a  + c

        
//     }
// }
// console.log(sum(10)(30))





function sum(a){
    return function (b){
        return function (c){
return a+b+c
        }
    }
}
console.log(sum(10)(10)(30));









// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y)
//     }
// }

// let multi3 = multiply(3)
// multi3(3)



// let multi2 = multiply(2)
// multi2(2)




// let multi = function(m){
//     return function (t){
//         console.log(m+t);
//     }

//     let multi = 
// }
// In JavaScript, currying is a technique that transforms a function with multiple arguments into
// a sequence of functions, each taking a single argument.  

// pros 
// Reusability: Curried functions can be easily reused with different arguments.

// cons 
// Increased Complexity:





// function sum(a) {
//     return (b) => {
//         console.log(a + b);
//     }
// }

// const s = sum(3);
// s(4);\


// function sum(a){
// return function(c){
//     return a+c
// }
// }
// console.log(sum(10)(19));

let num=("hi"&&"hi").length;
console.log(num)