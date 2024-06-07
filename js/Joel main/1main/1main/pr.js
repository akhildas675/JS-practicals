// const promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hey")
//     },2000)
// })

// promise.then((data)=>{
//     console.log(data)
// })


// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("rejected")
//     },3000)

// }) 



// const result = new Promise.allSettled([promise,promise1])
// result.then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     consolele.log(error)
// // })


const arr =[10,30,20,50]
const result = arr.reduce((acc,curr)=>{
   return acc<curr?acc:curr
})
console.log(result);





// const res = arr.map((x)=>{
//     return x*x
// })
// console.log(res);



// const myObj={
// name:"joel",
// age:18

// }

// function students(...place){
//     console.log(`${this.name},${this.age},${place}`)
// }

// // students.call(myObj)
// students.apply(myObj,["kerala","india"])

const fs = require('fs')

fs.readFile('text1.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("read")
    }
})