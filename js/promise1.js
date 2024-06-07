const promise=new Promise((resolve,reject)=>{
    // resolve("promise Sucesss")
    reject("promise Reject")
})

.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})