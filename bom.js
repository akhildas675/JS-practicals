// // promise 
// // Sucesss
// promise=new Promise((resolve,reject)=>{
//     if(num==0)
//     resolve('error')
// })


// promise.then((response)=>{
//     console.log(response);
// })


// //Reject 


// // promise=new Promise((resolve,reject)=>{
// //     reject('Failed')
// // })

// // promise.then((response)=>{
// //     console.log(response);
// // })

// // .catch((error)=>{
// //     console.log(error);
// // })


// const promise1=new Promise((resolve,reject)=>{
//     resolve('Promise1 Sucess')
// })

// const promise2=new Promise((resolve,reject)=>{
//     resolve('Promise2 Sucess')
// })

// const promise3=new Promise((resolve,reject)=>{
//     reject('Promise3 Failed')
// })

// const promise=Promise.all([promise1,promise2,promise3])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })




// function add(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1===0){
//             reject('Zero is found')
//         }
//         resolve(num1+num2)
//     })
// }
// function multiply(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1===0){
//             reject('Zero is found')
//         }
//         resolve(num1*num2)
//     })
// }

// function divid(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1===0){
//             reject('Zero is found')
//         }
//         resolve(num1/num2)
//     })
// }


// add(10,20)
// .then((sum)=>{
//     console.log(sum)
//    return multiply(sum,sum)
// }).then((product)=>{
//     console.log(product);
//     return divid(product,3)
// })
// .then((result)=>{
//     console.log(result);
// })

// .catch((err)=>{
//     console.log(err);
// })


//Hoisting
// host=3
// console.log(host);
// let host;

