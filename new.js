// const str='today is your review';
// const result=str.split(' ').reverse(' ').join(' ')
 
// console.log(result);


// const str = "today is my review";
// let reversed = '';

// // Split the string into an array of words
// const words = str.split(' ');
// // console.log(words);
// // Iterate through each word
// for (let i = 0; i < words.length; i++) { 
//     // Reverse the characters of the current word
//     let reversedWord = '';
//     console.log(words)
//     for (let j = words[i].length - 1; j >= 0; j--) {
//         reversedWord += words[i][j];
//     // console.log(reversedWord);
//     console.log(reversedWord);
//     }
//     // Append the reversed word to the result string
//     reversed += reversedWord;
// console.log(reversed)

//     // Add a space after each word except for the last one
//     if (i < words.length - 1) {
//         reversed += ' ';
//     }
// }

// console.log(reversed);
      



const str='hello world';       

const word=str.split(' ');
console.log(word);
for(let i=0;i<word.length;i++){
    word[i]=word[i].split('').reverse().join('')
}

let reverse=word
console.log(reverse);




// const str='hello world';

// const word=str.split('')

// for(let i=0;i<word.length/2;i++){
//     let temp=word[i];
//     word[i]=word[word.length-1-i]
//     word[word.length-1-i]=temp
// }
// let result=word.join('')
// console.log(result);

// let str = 'hello world';
// let lastIndex = str.length;

// for (let i = lastIndex; i >= 0; i--) {
//   // Access or perform an operation on the character at the last index
//   console.log(str[i]);

//   If you want to perform an operation only on the last itera
// }

// let str = ['hello world'];
// let lastIndex = str[0].length;
// let reversedStr = '';

// for (let i = lastIndex - 1; i >= 0; i--) {
//   reversedStr += str[0][i];
// }

// console.log(reversedStr);





// var num="1230"

// var result=num.split('').
// console.log(result);