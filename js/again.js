//promise

// const promise=new Promise((res,rej)=>{
//     res("Success")
// })

// .then((response)=>{
//     console.log(response);
// })

// .catch((err)=>{
//     console.log(err);
// })

//promise all methods

// const promise1=new Promise((res,rej)=>{
//     res("Succes")
// })

// const promise2=new Promise((res,rej)=>{
//     rej("Reject")
// })

// const promise=Promise.allSettled([promise1,promise2])

// .then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log(err);
// })


// async await


// function promise1(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("promise1 Sucess");
            
//         }, 1000);
//     })
// }


// function promise2(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("promise12Sucess");
            
//         }, 1000);
//     })
// }

// async function display(){
//     try{
//         const user=await promise1();
//         console.log(user);
//         const user2=await promise2()
//         console.log(user2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// display()

//promise sum


// function promiseSum(num1,num2){
//     return new Promise((res,rej)=>{
//         if(num1>0 ||num2>0){
//             res(num1+num2)
//         }else{
//             rej('Please enter valid number')
//         }
//     })
// }

// promiseSum(10,20).then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log(err);
// })

//Currying


// function add(num1){
//     return function a(num2){
//         return function b(num3){
//             return num1+num2+num3
//         }
//     }
// }
// console.log(add(10)(20)(30));


// closure

// function closure(){
//     let a=10;
//     let b=30
//     function show(){
//         let sum=a+b;
//         console.log(sum);
//     }
//     return show()
// }
// closure()

//constructor 

// function constructor(name,place){
//     this.name=name,
//     this.place=place
// }

// const user=new constructor('Akhildas','Palakkad')
// console.log(user);

// factory function

// function factory(name,place){
//     return{
//         name,
//         place,
//         details(){
//             return `hello I am ${this.name} I am from ${this.place}`
//         }
//     }
// }

// const user=factory('Akhildas','palakkad')
// console.log(user.details());

//call apply bind


// const person={
//     name:'Akhil'
// }

// function details(place){
//     console.log(`Hai I am ${this.name} I am from ${place}`);
// }

// details.call(person,"Palakkad")
// details.apply(person,["Thrissur"])
// const user=details.bind(person,"kochi")
// user()

//class

// class display{
//     constructor(name,place){
//         this.name=name,
//         this.place=place
//     }
// }

// const user=new display('Akhil','palakkad')
// console.log(user);



// IIFE
// (function(){
//     console.log('hello');
// })()


//generator function

// function* display(){

// for (let i = 1; i <= 10; i++) {
//     yield i
// }
// }

// const gen=display();
// for (let i = 0; i<10; i++) {
   
//     console.log(gen.next().value);
// }


//Object seal

// const person={
//     name:'Akhildas',
//     id:123,
//     address:{
//         place:'palakkad',
//         state:"kerala"

//     }
// }

// Object.seal(person)
// person.name='Akhil'
// delete person.id
// person.address.place="Kochi"
// console.log(person);


//freeze
// const person={
//     name:'Akhildas',
//     id:123,
//     address:{
//         place:'palakkad',
//         state:"kerala"

//     }
// }
// Object.seal(person)
// person.name='Akhil'
// delete person.id
// person.address.place="Kochi"
// console.log(person);


// shallowcopy

// const person={
//     name:'Akhildas',
//     id:123,
//     address:{
//         place:'palakkad',
//         state:"kerala"

//     }
// }

// const user=Object.assign({},person)
// user.address.place='kochi'


// console.log(person);
// console.log(user);


// const person={
//     name:'Akhildas',
//     id:123,
//     address:{
//         place:'palakkad',
//         state:"kerala"

//     }
// }

// const user=structuredClone(person)

// delete user.id
// user.age=23
// console.log(user);
// console.log(person);

// splice
let arr=[1,2,3,4,5,6]
arr.splice(1,2)
console.log(arr);