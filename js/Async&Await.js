function firstPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('First promise success')
        }, 1000);
        
    })

}
function secondPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Second promies success')
        },2000)
       
    })
}

async function result(){
    try{
        const promiseone=await firstPromise()
        console.log(promiseone);
        const promisetwo= await secondPromise();
        console.log(promisetwo);
    }
    catch(error){
        console.log(error);
    }
}
result();