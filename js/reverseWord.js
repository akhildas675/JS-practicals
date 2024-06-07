let s="hello akhil how are you";

let arr=s.split(" ");

for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].split('').reverse().join("")

}
let result=arr;
console.log(result.join(' '));



// let arr=s.split(' ')
// let reverse=" ";

//  for(let i=0;i<arr.length;i++){
//   let rev=" ";
//   for(let j=arr[i].length-1;j>=0;j--){
//    rev+=arr[i][j]
//   } 
//   reverse+=rev
//  if(i<arr.length-1){
//    reverse+=''
//  } 
// }
// console.log(reverse);


// let arr=s.split(' ');
// let rev='';

// for(let i=0;i<arr.length;i++){
//   let word=" ";
//   for(let j=arr[i].length-1;j>=0;j--){
//     word+=arr[i][j]
//   }
//   rev+=word
// }
// console.log(rev);

