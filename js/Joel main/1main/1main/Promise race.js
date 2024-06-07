// *race*
// - Returns a single promise as soon as it fails or succeeds

const promise = new Promise((resolve, reject) => {
  resolve(["react","Angular1"])
  // reject("API failed");
});
const promisee = new Promise((resolve, reject) => {
  resolve(["react","javascript2"])
  // reject("API failed");
});

const promiseee = new Promise((resolve, reject) => {
  resolve(["react", "Angular3"]);
  // reject("API failed");
});
const promiseeee = new Promise((resolve, reject) => {
  // resolve(["react", "Angular"]);
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

const promise1 = Promise.race([promise, promisee, promiseee, promiseeee]);
promise1
  .then((res) => {
    console.log(res.flat(Infinity));
  })

  .catch((error) => {
    console.log(error);
  });
