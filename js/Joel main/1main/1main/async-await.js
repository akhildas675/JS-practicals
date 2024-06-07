


// promise.then((res) => {
//     console.log(res);
//   })

//   .catch((error) => {
//     console.log(error);
//   });


// *In normal function 

// async function fethData(){
//     const response = await promise
//     console.log(response)
// }
// fethData();




// *In arrow function 

// const fetchDataa = async ()=>{
//     const response = await promise;
//     console.log(response)
// };
// fetchDataa();


//IIFE

// (async()=>{
//     const response = await promise;
//     console.log(response)
// })();



// -------------------

// function one() {
//   return new Promise((resolve, reject) => {
//       let food = true
//       setTimeout(() => {
//           if (food) {
//               resolve("okay1")
//           }
//       }, 3000);
//   })
// }

// function two() {
//   return new Promise((resolve, reject) => {
//       let food = true
//       setTimeout(() => {
//           if (food) {
//               resolve("okay2")
//           }
//       }, 0);
//   })
// }

// async function result() {


//   try {
//       const res1 = await one();
//       console.log(res1);
//       const res2 = await two();
//       console.log(res2);
//       return [res1, res2]
//   } catch (error) {
//       console.log(error);
//   }
// }

// result()




// --------------------

// async function result1() {
//   try {

//     const timeout1 = () => new Promise(resolve => setTimeout(() => {
//       console.log("okay1 worked 3second");
//       resolve("3  second");
//     }, 3000));

//     const timeout2 = () => new Promise(resolve => setTimeout(() => {
//       console.log("okay2 worked 1 second");
//       resolve();
//     }, 1000));

//     await timeout1();
//     await timeout2();
//   }
  
//   catch (error) {
//     console.log(error);
//   }
// }

// result1();






// function first(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("odi")
//     },2000)

//   })
// }


// function second(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("odi2")
//     },1000)
//   })
// }

// async function result(){
//   try{
//     const red =await first()
//     console.log(red);
//     const blue = await second()
//     console.log(blue);
//     // return [red,blue]
//     }
//   catch(error){
//     console.log(error);
//   }
// }
// result()

function doge(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("hey")
  },1000)
})

}

function swagcat(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('odi')
    },1000)
  })
}


async function result (){

  try{
    const milton =  await doge()
    console.log(milton)
    const kylie= await swagcat()
    console.log(kylie)

  }catch(error){
    console.log(error);
  }

}

result()