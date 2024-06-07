setTimeout(()=>{
    console.log('hello');
},1000)


let set=setInterval(()=>{
    console.log('intervel');
},1000)

setTimeout(() => {
    clearInterval(set)
}, 4000);
setImmediate(()=>{
    console.log('immediate');
})
process.nextTick(()=>{
    console.log('process');
})


let i=0;

let intervel=setInterval(()=>{
    console.log(i);
    i++
    if(i>10){
        clearInterval(intervel)
    }
},1000)