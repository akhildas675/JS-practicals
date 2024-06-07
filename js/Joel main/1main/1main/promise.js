// promise object is a placeholder for a certain period of time until we recieve a avlue from a asyncronous operation
// a promise is an object representing the eventual completion or failure of an asynchronous operation







const promise = new Promise((resolve,reject)=>{
    resolve("Success");
})



promise.then((response)=>{
    console.log(response);
})
    
// rejected


// const promise1 = new Promise((resolve,reject)=>{
    // reject("Failed");
// })

// promise1.then((response)=>{
    // console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })









// const pro = new Promise((resolve, reject) => {
//     resolve("success")
// })

// pro.then((response)=>{
//     console.log(response);
// })

// const pro1 = new Promise((resolve, reject) => {
//     reject("odi")
// })

// pro1.then((respo)=>{
//     console.log(respo);
// })

// .catch((err)=>{
//     console.log(err);
// })