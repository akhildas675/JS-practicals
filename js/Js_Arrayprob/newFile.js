// // const a=10


// // const promise = new Promise((resolve, reject) => {
// //     if (a == 10) {
// //       resolve("Success");
// //     } else {
// //       reject("Error");
// //     }
// //   });
  
// //   promise
// //     .then((result) => {
// //       console.log(result); 
// //     })
// //     .catch((error) => {
// //       console.log(error); 
// //     });



//     const person={
//         name:"John",
//         age:18,
   
// }
    
//     function hai(...name){
//         console.log(`hai ${name}, iam ${this.name}`)
//     }



//     // hai.call(person,"Anjith")
//     // hai.apply(person,['anjith','joel','abhilash'])
//     const doge = hai.bind(person,['anjith'])
//     doge()
    










const array=[5,2,3,4,1]


const res= array.reduce((acc,curr)=>{
    return curr<acc?acc:curr
})

console.log(res)


