// let arr=[1,2,3,4,5,6,7,8,9,10]

//while

// let sum=0;
// let i=0;

// while(i<arr.length){
//     sum+=arr[i];
//     i++;
// }
// console.log(sum);

// let i=0;
// let sum=0;

// do{
//     sum+=arr[i];
//     i++;
// }while(i<arr.length)
//     console.log(sum);


// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];

// }
// console.log(sum);

// 


// let sum=0;

// arr.forEach(value=>{
//     sum+=value
// })
// console.log(sum);


// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }

// console.log(sum);
// let sum=0;

// let result=arr.filter((value)=>{
//     if(value%2==0){
//         sum+=value
//     }
    
// })
// console.log(sum);


let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;

arr.forEach((value) => {
    if (value % 2 === 1) {
        sum += value;
    
    }
});

console.log(sum);


