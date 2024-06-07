// let obj = [{ a: 20, b: { c: 30 } }, { s: 10 }, [20,10],,[[[10,40]]],30,undefined];


// function totalsum(array){
//     let result=[];

//     array.forEach(element => {
//         if(Array.isArray(element)){
//             result.push(...totalsum(element)) 
//         }else if(typeof element==='object' && element!==null){
//             result.push(...totalsum(Object.values(element)))
//         }else if(typeof element==='number'){
//             result.push(element)
//         }
        
//     });
//     return result
    
// }

// let final=totalsum(obj)
// // console.log(final);

// function totalsum(array){
//     let result=[]
//     array.forEach(element => {
//         if(Array.isArray(element)){
//             result.push(...totalsum(element))
//         }else if(typeof element==='object' && element!==null){
//             result.push(...totalsum(Object.values(element)))
//         }else if(typeof element==='number'){
//             result.push(element)
//         }
//     });
// return result
// }


// let final=totalsum(obj)
// console.log(final);

// let joel=final.reduce((acc,cuc)=>{
//     acc+=cuc
//     return acc
// })

// console.log(joel);



// let array=[1,2,3,4,5]
// let sum=0

// array.forEach((element)=>{
//     sum+=element
// })
// console.log();

