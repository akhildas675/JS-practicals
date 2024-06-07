const promise= new Promise((resolve,reject)=>{
    resolve(["Javascript","Node.js"])
});

const promisee = new Promise((resolve,reject)=>{
    // resolve(["react","Angular"])
    reject("API failed")
});

const promiseee = new Promise((resolve,reject)=>{
    resolve(["react","Angular"])

});



// promise.then((res)=>{
//     console.log(res);
// });

// promisee.then((res)=>{
//     console.log(res)
// });

// promiseee.then((res)=>{
//     console.log(res)
// });


// Uisng promise all 

const promise1 = Promise.allSettled([promise,promisee,promiseee]);
promise1.then((res)=>{
    console.log(res.flat(Infinity));
})

.catch((error) => {
    console.log(error);
});


