//call apply bind


// const person={
//     name:"akhil",
//     age:23,
// }


// function display(place,job){
//     console.log(`I am ${this.name} my age ${this.age} I am from ${place}, I am ${job}`);
// }


// display.call(person,"palakkad","developer")
// display.apply(person,["Thrissur","Manager"])
// const user=display.bind(person,"kochi","Salesman")
// user()


// closure

// function dis(){
//     let x=10;
//     let y=20
//      function val(){
//         console.log(x+y);
//     }
//     return val
    

// }

// let user=dis()
// user()


//constractor


// function Constructor(name,age){
//     this.name=name,
//     this.age=age,
//     this.hey=function(){
//         console.log(`hello ${this.name}, my age ${this.age}`);
//     }
// }

// const person=new Constructor("Akhildas",23)

// person.hey()

// console.log(person.name);



//factory function


// function dis(name,place){
//     return{
//         name,
//         place,
//         user(){
//             return `hello ${this.name} I am from ${this.place}`
//         }
//     }
// }

// const result=dis("akhil",23)
// console.log(result.user());



// function dis(a){
//     return function(b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }

// console.log(dis(10)(20)(30));




//deep copy


// const person={
//     name:"Akhil",
//     age:23,
//     address:{
//         place:"palakkad",
//         state:"Kerala"
//     }
// }


// const person1=structuredClone(person)
// const person1=JSON.parse(JSON.stringify(person))

// person1.name="Akhildas";

// person1.address.place="kochi";
// person1.address.state="Goa"

// console.log(person);
// console.log(person1);

// const person={
//     name:"Akhil",
//     age:23,
//     address:{
//         place:"palakkad",
//         state:"kerala"
//     }
// }

// // const person1=Object.assign(person);
// // // const person1={...person}

// // person1.name="Musin";
// // person1.address.place="pattambi";
// // person1.address.state="Goa"
// // console.log(person1);
// // console.log(person);


// delete person.address

// console.log(person);



//generator function


// function* display(){
//     yield a=10;
//     yield b=20;
//     yield a=12;
//     yield b=23;
//     yield a=14;
//     yield b=26;
//     yield a+b;

// }

// const gen=display();
// for(let i=1;i<=7;i++){

// console.log(gen.next().value)
    
// }


// const person={
//     name:"Akhil",
//     age:23,
//     address:{
//         place:"palakkad",
//         state:"kerala"
//     }
// }


// higher order

// let arr=[1,2,3,4,5,6]



// // let result=arr.map((x)=>x*x)
// // console.log(result);

// let result=arr.filter((x)=>x%2==0).reduce((a,c)=>a+c)

// console.log(result);



//promise aysnc await

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("promise1 success")
//         },1000)
//     })
// }

// function promise2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise2 success")
//         })
//     })
// }


// async function display(){
//     try{
//         const user= await promise1()
//         console.log(user);
//         const user1= await promise2()
//         console.log(user);

//     }
//     catch(error){
// console.log(error);
//     }
// }
// display()



// let arr=[1,2,3,4,4,4,4,4,5,5,5,5,5,3,3,3,2,2,4,5,6,6,7,7,88,4,3]

// let result=arr.reduce((acc,cuc)=>{
//     acc[cuc]=(acc[cuc]||0)+1;

//     return acc
// },{})

// console.log(result);



// const person = {
//     name: "John",
//     age: 30
// };

// Object.seal(person);

// person.name="akhil";
// console.log(person);



// function display(name,callback){
//     console.log("hello "+name);
//     callback(name)
// }

// function show(name){
//     console.log("This is the call back function "+name);
// }


// display("Akhil",show)
































