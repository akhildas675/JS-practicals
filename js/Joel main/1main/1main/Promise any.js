// *any*
// - returns a single promise after success, if everything fails then it shows "all promises are rejected"

const promise = new Promise((resolve, reject) => {
  resolve(["react","Angular"])
  // reject("API failed");
});
const promisee = new Promise((resolve, reject) => {
  // resolve(["react","Angular"])
  reject("API failed");
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

const promise1 = Promise.any([promise, promisee]);
promise1
  .then((res) => {
    console.log(res.flat(Infinity));
  })

  .catch((error) => {
    console.log(error);
  });
