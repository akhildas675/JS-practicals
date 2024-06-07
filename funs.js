///////////////////////////////////////////////////////////////////////////////////////////////////

// callback

// function display(name,callback){
//     console.log("hai I am "+name);
//     callback()
// }

// function show(){

//     console.log("hello all");


// }
// display('akhildas',show)


// // Function that takes a callback function as an argument
// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback(); // Execute the callback function
// }

// // Callback function
// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// // Passing the callback function to the greet function
// greet("Alice", sayGoodbye);








///////////////////////////////////////////////////////////////////////////////////////////////


//call back hell
// function first(callback){
//     const data={name:'Akhildas',
// place:'Kochi'}
// callback(data)
// }

// function second(data,callback){
//     const person=`I am ${data.name} I am from ${data.place}`
//     callback(person)
// }

// function display(){
//     first((data)=>{
//         second(data,(person)=>{
//             console.log(person);
//         })
//     })
// }
// display()

// Step 1: Asynchronous function with callback
function stepOne() {
    setTimeout(function() {

        console.log("Step 1 completed.");
        // Step 2: Asynchronous function with callback inside stepOne's callback
        setTimeout(function() {

            console.log("Step 2 completed.");
            // Step 3: Asynchronous function with callback inside stepTwo's callback
            setTimeout(function() {

                console.log("Step 3 completed.");
                console.log("All steps completed.");
            }, 1000);
        }, 1000);
    }, 1000);
}

// Calling stepOne to start the callback hell

stepOne();











///////////////////////////////////////////////////////////////////////////////////////////////////

//closure

// function display(){
//     var num1=10
//     var num2=20
//     function show(){
//         let sum=num1+num2
//         console.log(sum);
//     }
//     return show
// }
// const cal=display()
// cal()

//////////////////////////////////////////////////////////////////////////////////////////////////


// factory function
// function factory(name,place){
//     return{
//         name,
//         place,
//         great(){
//             return `My name is ${this.name} I'm from ${this.place}`
//         }
//     }
// }

// const user=factory('Akhildas','Kochi')
// console.log(user.great());


//////////////////////////////////////////////////////////////////////////////////


// constructor

// function display(name){
//     this.name=name;
// }

// const user=new display('Akhildas')

// console.log(user.name);

//////////////////////////////////////////////////////////////////////////////////

// callapplybind

// const profile={
//     name:'Akhildas',
//     age:23,
// }

// function details(place,job){
//     console.log(`Hai I am ${this.name} I'm from ${place} I'm a ${job}`);
// }


// details.call(profile,'Ernakulam','Fullstack developer')
// details.apply(profile,['palakkad','Flutter developer'])
// const user=details.bind(profile,'Calicut','Game developer')
// user()


/////////////////////////////////////////////////////////////////////////////////////

// shallow copy and deep copy

// const profile={
//     name:'Akhildas',
//     age:23,
//     address:{
//         place:'Kochi',
//         state:'Kerala'
//     }
// }

// const user=Object.assign({},profile)

// user.name='martin',
// user.age=25;
// user.address.place='Chennai';
// user.address.state='Tamilnadu';

// console.log(profile);
// console.log(user);


////////////////// deep copy

// const profile={
//     name:'Miles',
//     age:15,
//     address:{
//         place:'Brooklyn',
//         state:'Newyork'
//     }
// }


// const user=JSON.parse(JSON.stringify(profile))

// user.name='Miguel',
// user.age=24,
// user.address.place='Earth2014';
// user.address.state='USA'

// console.log(profile);
// console.log(user);


////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promise

//Sucess

// promise=new Promise((resolve,reject)=>{
//     resolve('Success')
// })

// .then((response)=>{
//     console.log(response);
// })


// promise=new Promise((resolve,reject)=>{
//     reject('Failed')
// })
// .then((response)=>{
//     console.log(response);
// })

// .catch((error)=>{
//     console.log(error);
// })


//all methods


// const promise1=new Promise((resolve,reject)=>{
//     resolve('Promise1 Success')
// })

// const promise2=new Promise((resolve,reject)=>{
//     resolve('Promise2 Sucess')
// })

// const promise3=new Promise((resolve,reject)=>{
//     reject('Promise 3 rejected')
// })

// const promise=Promise.race([promise1,promise2,promise3])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })


//async Await


// function firstpromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('1st Sucesss')
//         },3000)
//     })
// }

// function secondpromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('2nd Promise Success')
//         }, 1000);
//     })
// }

// async function display(){
//     try{
//         const user=  firstpromise();
//         console.log(user);
//         const user2=await secondpromise();
//         console.log(user2);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// display()


// promsie sum


//  function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a||b===0){
//             reject('answer failed')
//         }else{
//             resolve(a+b)
//         }
//     })
//  }

//  add(0,0)

//  .then((response)=>{
//     console.log(response);
//  })

//  .catch((error)=>{
//     console.log(error);
//  })


//map

// const array=[20,30,40,50,10]

// const result=array.map((x)=>{
//     return x*x
// })
// console.log(result);


// const arr=[1,1,2,3,4,5,5,5,5,5,5,2,2,2,21,1,1,1]
// const result=arr.reduce((acc,cucc)=>{
//     acc[cucc]=(acc[cucc]||0)+1
//     return acc
// },{})
// console.log(result);


// const arr=[1,1,2,3,4,5,5,5,5,5,5,2,2,2,21,1,1,1]

// const result=arr.filter()=>%2==0)).reduce((acc,cuc)=>(acc+cuc))
// console.log(result);


// const arr=[1,2,3,4,5,6,7,8,9,10]

// result=0;
// arr.forEach((value,index)=>{
//     result=result+value
// })
// console.log(result);

//dlrow olleh

// const str='hello world';
// const word=str.split('')

// for(let i=0;i<word.length/2;i++){
//     let temp=word[i]
//     word[i]=word[word.length-i-1];
//     word[word.length-1-i]=temp;
// }
// let result=word.join('')
// console.log(result);



// generative function

// function* display(){
//     yield a=10;
//     yield b=20;
//     yield sum=a+b;
// }

// const gen=display()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


// const arr=['miles','miguel','gwen','jeff','spot']

// arr.splice(0,2,'Aron')
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9,10]