const promise=new Promise((resolve,reject)=>{
    // resolve("Success")
    reject("Failed")
})

.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})


