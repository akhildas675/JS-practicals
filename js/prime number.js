
// const arr = [4, 7, 5, 2, 1, 3, 7, 9,11,13];
// const arr1 = arr.filter((n) => {
//     if(n<=1) return false
//   for (i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       return false
//     }
// }
//     return true

  
  
// })
// console.log(arr1);


// const result=arr.filter((value)=>{
//     if(value<=1) return false
//     for(let i=2;i<value/2;i++){
//         if(value%i==0){
//             return false
//         }
//     }
//     return true
// });

// console.log(result);


// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     prime=true;
//     if(arr[i]<=1)
//         prime=false;
//     for(let j=2;j<arr[i]/2;j++){
//         if(arr[i]%j===0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);
// function prime(num){
//     if(num<=1) return false;
//     if(num===2) return true;
//     if(num%2===0) return false;
//     for(let i=2;i<=num/2;i++){
//         if(num%i===0) return false;
//     }

//     return true;
// }

// const array = [1,2,3,4, 7, 5, 2, 1, 3, 7,0, 9, 1];
// const primeNumbers = array.filter((number) => prime(number));
// console.log(primeNumbers)

// let arr=[1,2,3,4,5,6,7,8,9,10,1,12,13,14,15,16,17,18,19,20];
// array=array.filter(item=> typeof item==='number')

// function prime(num){
//     if(num<=1) return false;
//     if(num===2)return true;
//     if(num%2===0)return false
    
//     for(let i=2;i<=num/2;i++){
        
//         if(num%i===0)return false;
//     }
//     return true



// }

// const primeNumbers=array.filter((number)=>prime(number));
// console.log(primeNumbers);




// let newArr=[];
// for(let i=0;i<arr.length;i++){
//     prime=true;
//     if(arr[i]<=1)
//         prime=false;
//     for(let j=2;j<=arr[i]/2;j++){
//         if(arr[i]%j==0){
//             prime=false;
//             break;
//         }

//     }
//     if(prime){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);


let arr=[1,2,3,4,5,6,7,8,9,10,1,12,13,14,15,16,17,18,19,20];


// let newArr=[];
// for(let i=0;i<arr.length;i++){
//     prime=true;
//     if(arr[i]<=1)
//         prime=false;
//     for(let j= 2;j<=arr[i]/2;j++){
//         if(arr[i]%j===0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

let newArr=[];
for(let i=0;i<arr.length;i++){
    prime=true;
    if(arr[i]<=1){
        prime=false;
    }
    for(let j=2;j<=arr[i]/2;j++){
        if(arr[i]%j===0){
            prime=false;
            break;
        }
    }
    if(prime){
        newArr.push(arr[i])
    }
}
console.log(newArr);