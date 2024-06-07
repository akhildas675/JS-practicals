// const num=123456;
// let str=num.toString();
// let reverse=''
// for(i=str.length-1;i>=0;i--){
//     reverse+=str[i]
// }

// console.log(reverse);


// const str='malayalam';

// let result='';

// for(let i=str.length-1;i>=0;i--){
//     result+=str[i]
// }
// if(str==result){
//     console.log(str+' is palindrome');
// }else{
//     console.log(str+' is not a palindrome');
// }


const str='today is my review';
let result='';
const word=str.split('');
console.log(word);

for(let i=0;i<word.length;i++){
    let reverse='';
    for(let j=word[i].length-1;j>=0;j--){
        reverse+=word[i][j]
    }
    result+=reverse;

    if(i<word.length-1){
        result+=' ';
    }
    
}
console.log(result);

// const str="today is my review";
// let result="";
// let word=[];
// for(let i=0;i<str.length;i++){
//     word.push(str[i])
// }
// console.log(word);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let primeNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     let isPrime = true;

//     if (numbers[i] <= 1) {
//         isPrime = false;
//     } else {
//         for (let j = 2; j < numbers[i]; j++) {
//             if (numbers[i] % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     if (isPrime) {
//         primeNumbers.push(numbers[i]);
//     }
// }

// console.log(primeNumbers);

// const number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let primeNumber=[];

// let a = 1;
// function foo() {
//   var a = 2;
//   console.log(a);
// }
// foo();