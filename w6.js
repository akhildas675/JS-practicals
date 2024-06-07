// function display(name,callback){
//     console.log(`Hello I am ${name}`);
//     callback()
// }
// function show(x){
//     console.log('this is the callback  '+x);
// }
// display('akhil',()=>show("manu"))

//------------------------- promise

//success

// const promise=new Promise((resolve,reject)=>{
//     resolve("success")
// })

// .then((response)=>{
//     console.log(response);
// })


//Reject

// const promise= new Promise((resolve,reject)=>{
//     reject("Failed")

// })

// .then((response)=>{
// //     console.log(response);
// // })

// // .catch((error)=>{
// //     console.log(error);
// // })




// //using function -----------------------------------------------------


// // function display(){
// //     return new Promise((resolve,reject)=>{
// //         // resolve("success")m
// //         reject("fail")
// //     })
// // }
// // display()

// //     .then((response)=>{
// //         console.log(response);
// //     })

// //     .catch((error)=>{
// //         console.log(error);
// //     })

// //promise allsetteled---------------------------------------------------------------

// const promise1=new Promise((resolve,reject)=>{
//     resolve("Promise 1 success")

// })

// const promise2=new Promise((resolve,reject)=>{
//     reject("Promise 2 rejcected")
// })

// const promise3 = new Promise((resolve,reject)=>{
//     resolve("Promise 3 Success")
// })

//  const promise=Promise.any([promise1,promise2,promise3])

//  .then((response)=>{
//     console.log(response);
//  })
//  .catch((error)=>{
//     console.log(error);                                                                                  
//  })


// promise async await ------------------------------------------------------

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Success")
//         },2000)
//     })
// }

// function promise2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Success")
//         })
//     })
// }

// async function result(){
//     try{
//         const one=await promise1();
//         console.log(one);
//         const two=await promise2()
//         console.log(two);


//     }catch(error){
//         console.log(error);

//     }
// }
// result()


// constractur 
// function details(name,age){
//     this.name=name;
//     this.age=age;

// }


// const person1=new details("akhildas",23)
// console.log(person1);



// call apply bind


// const person={
//     name:"Akhildas",
//     age:23,

// }

// function display(place){
//     console.log(`i am ${this.name} I am from ${place}`);
// }

// display.call(person,"kochi")

// display.apply(person,["palakkad"])
// const user=display.bind(person,"kannur")
// user()



// shallow copy and deep 


// const person={
//     name:"Akhil",
//     age:23,
//     address:{
//         place:"palakkad",
//         state:"kerala"
//     }
// }


// const Alter=Object.assign({},person)
// Alter.name="vijay";
// Alter.address.place="chennai";
// Alter.address.state="tamilnadu"

// console.log(Alter);
// console.log(person);



// To start the pendings


// // how to concate two array
// const array1=[1,2,3,4,5]
// const array2=[6,7,8,9,10]

// // 1 way
// const newArr=[...array1,...array2]

// // second way
// const puthiyaArr=array1.concat(array2)

// console.log(newArr);
// console.log(puthiyaArr);


// function reverse(str){
//     let exist

//     for(let i=0;i<str.length;i++){

//     }

// }

// converting zero

// const a=[10,20,-20,-10,30,-12]

// for(let i=0;i<a.length;i++){
//    if(a[i]<0){
//       a[i]=0
//    }
// }
// console.log(a);

// const a=[1,2,3,4,5,6]

// for(let i=0;i<a.length;i++){
//    if(a[i]%2==0){
//       a[i]=0
//    }
// }

// console.log(a);


// const a=[1,2,3,4,5,6]

// let result= a.map((x)=>{
//    if(x%2==0){
//       return 0
//    }else{
//       return x
//    }
// })

// console.log(result);

// let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8,2,1,12, 9];
// let uniqueValues =[]
// for (let i = 0; i < arr.length; i++) {
//     let isUnique = true;
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[i] === arr[j]) {
//             isUnique = false;
//             break;
//         }
//     }
//     if (isUnique) {
//         uniqueValues[uniqueValues.length]= arr[i];

//     }
// }

// console.log("Unique numbers:", uniqueValues);



//palidrome

// let str='malayalam';
// var palindrome=true

// for(let i=0;i<str.length/2;i++){
//     if(str[i]!==str[str.length-i-1]){
//         palindrome=false
//         break;

//     }
// }

// if(palindrome){
//     console.log("yes");
// }else{
//     console.log("no");
// }



// count most reapeated number

// const array=[1,2,3,4,5,2,4,5,1,7,9,1,1,1,2,2,2,2,2,2,2,2,2,2] ;


// var count=0;
// var max=0
// var value
// for(let i=0;i<array.length;i++){
//     count=1;
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]==array[j]){
//             count++
//         }
//     }
//     if(count>max){
//         max=count;
//         value=array[i]
    
//     }
// }

// console.log("the "+value+ "  repeated "+max+" times" );



// let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];

// let result=arr.filter((x)=>x%2==0)
// console.log(result);

//  frequncy

// const array=[1,2,3,4,5,2,4,5,1,7,9,1,1,1,2,2,2,2,2,2,2,2,2,2] ;

// let result=array.reduce((acc,cuc)=>{
//     acc[cuc]=(acc[cuc]||0)+1
//     return acc
// },{})
// console.log(result);

// function* display(){
//     yield a=10;
//     yield b=20;
//     yield sum=a+b;
// }

// const gen=display()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


const numbers = [1, 2, 3, 4, 5];
let maxProduct = 1;

for (let i = 0; i < numbers.length; i++) {
    maxProduct=maxProduct*numbers[i]

}

console.log(maxProduct);
