//JSON parse and Json stringfy



// const json = '{ "name": "John Doe", "age": 20 }';

// // Parse the JSON string into a JavaScript object.
// const obj = JSON.parse(json);

// // Stringify the JavaScript object into a JSON string.
// const jsonString = JSON.stringify(obj);

// console.log(obj); // { name: 'John Doe', age: 30 }
// console.log(jsonString); // '{ "name": "John Doe", "age": 30 }'


//factory function 

// function person(name,place){
//     return{
//         name,
//         place,
//         details(){
//             return `I am ${this.name}, from ${this.place}`
//         }
//     }
// }

// const user=person('Akhildas','kochi')
// console.log(user.details());


// function first(callback){
//     setTimeout(()=>{
//       const data={name:'Akhildas',
//         place:'Kochi'
//       }
//       callback(data)
//     },2000)
//   }
  
  
//   function second(data,callback){
//     setTimeout(()=>{
//       const pass=`my name ${data.name}, I from ${data.place}`
//       callback(pass)
//     },3000)
//   }
  
//   function display(){
//     first((data)=>{
//       second(data,(pass)=>{
//         console.log(pass)
//       })
//     })
//   }
  
//   display();

// 


// ============================= constructor 

// function display(name){
//     this.name=name;
// }

// const user= new display('Akhildas')
// console.log(user.name);



//==================================== more than age 
// const users = [

//     {firstname:"Amal",lastname:"joseph",age:25,place:'dubai'},
//     {firstname:"Arun",lastname:"thomas",age:26,place:'London'},
//     {firstname:"emin",lastname:"eldho",age:28,place:'Kochi'},
//     {firstname:"lalu",lastname:"santhosh",age:29,place:'kannur'},


// ]

// const result=users.filter((x)=>x.age<28).map((x)=>`fullname: ${x.firstname} ${x.lastname} place: ${x.place} age: ${x.age}`)
// console.log(result);

//========================== callback
// function firstcall(callback){
//     setTimeout(()=>{
//       const data={name:'Akhildas'}
//       callback(data)
//     },1000)
//   }
  
//   function secondcall(data,callback){
//     setTimeout(()=>{
//       const person=`hai I am ${data.name}`
//       callback(person)
//     },3000)
    
//   }
  
//   function display(){
//     firstcall((data)=>{
//       secondcall(data,(person)=>{
//         console.log(person)
//       })
//     })
//   }
//   display();

// ================== constructor 
// function display(name){
//     this.name=name
// }
// const user=new display('Akhildas')
// console.log(user.name);

//==================== Generative function ===============


// function* display(){
//     yield a=20
//     yield b=30
//     yield a+b;
// }
// const gen=display()

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function factory(name,place){
//     return{
//         name,
//         place,
//         great(){
//             return `I am ${this.name}, I'm from ${this.place}`
//         }
//     }
// }
// const user=factory('Akhildas','Under world')
// console.log(user.great());


//===================== object destracturing 

// person={
//     name:'Akhildas',
//     place:'Underworld',
//     job:'Full stack developer'
// }


// const {name,place,job}=person

// console.log(name);
// console.log(place);
// console.log(job);

//======================== Array Destracturing 


// const cars=['Nissan gtr','Mustang','RR sport','POLO']

// const [one,two,three,four]=cars
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);


//implicit

// console.log('44'+44);           1

//----------
// var num = 42;
// var str = "The answer is " + num;
// console.log(str);

// let num="50" 
// let sum=num -20;
// console.log( sum);

// var str = "42";
// var num = str*2;
// console.log(typeof num);
//-------------


//======== explict

// var num="40";
// let result=Number(num)
// console.log(result);

// var num=40;
// let result=String(num)
// console.log(typeof result);

// closure




// function outside(){
//     var num=10;
//     var num2=50;
//     function inside(){
//         console.log(num+num2);
//     }
//     return inside
// }
// let calling=outside();
// calling();


// shallow copy and deepcopy


//shallow

// const person={
//     name:'Akhildas',
//     age:23,
//     address:{
//         place:'london',
//         occupation:'Developer'
//     }
// }



// const user=Object.assign({},person)
// user.name='john';
// user.age='18'
// user.address.place='America';

// console.log(person);
// console.log(user);

//deep Copy


// const person={
//     name:'Akhildas',
//     age:18,
//     address:{
//         state:'Kerala',
//         country:'India'
//     }
// }


// const user=JSON.parse(JSON.stringify(person))
// user.name='john',
// user.age=21,
// user.address.state='London'
// user.address.country='America'
// console.log(person);
// console.log(user);


//call apply bind


// const person={
//     name:'Akhildas',
//     Place:'kochi'
// }


// function student(job){
//     console.log(`Hai I am ${this.name} I'm from ${this.Place} I'm a ${job} `)
// }

// student.call(person,'Full stack developer')

// student.apply(person,['Marketing managerr'])

// const last=student.bind(person,('Police inspector'))
// last()


// Promise

// promise= new Promise((resolve,reject)=>{
//     resolve('Success ')
// })

// promise.then((response)=>{
//     console.log(response);
// })

//Promise fail

// promise=new Promise((resolve,reject)=>{
//     reject('Failed');

// })

// promise.then((response)=>{
//     console.log(response);
// })

// .catch((error)=>{
//     console.log(error);
// })

// Promise Async Await

// function firstpromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('first Promise Success')
//         },2000)
//     })
// }

// function secondpromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Second promise Success')
            
//         },1000);
//     })
// }

// async function display(){
//     try{
//         const promise1=await firstpromise();
//         console.log(promise1);
//         const promise2=await secondpromise();
//         console.log(promise2);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// display();


//Split
// const fruit='Apple';

// let result=fruit.split("")
// console.log(result);


//reverse

// const fruit=['Apple','Orange']
// let result=fruit.reverse('')
// console.log(result);


//splice 

//add


// const fruit=['apple','orange','grape','banana','mango']

// fruit.splice(2,0,'kiwi')
// console.log(fruit);

// remove

// let result=fruit.splice(0,3)
// console.log(result);

//Slice


// let result=fruit.slice(0,2)
// console.log(result);



//foreach 

// const array=[10,20,3,40,5,60]
// let sum=0;
// array.forEach((value,index)=>{
//     sum=sum+value

// })
// console.log(sum);

// const object = {
//     name: "John Doe",
//     age: 30,
//   };
  
//   // Delete the "age" property
//   delete object.age;
//   console.log(object);
//   object.place='kochi'
//   console.log(object);

// (function(){
//     console.log('helllo');
// })()


// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
//   }
  
//   // callback function
//   function callMe() {
//     console.log('I am callback function');
//   }
  
//   // passing function as an argument
//   greet('Peter', callMe);



//   function great(name,callback){
//     console.log('hi'+' '+name);
//     callback()
//   }
//   function me(){
//     console.log(' This is the callback function');
//   }

//   great('john',me)

// let arr=[1,2,3,4,5,6,8,9]

// let result=arr.reduce((acc,cuc)=>{
//    return acc>cuc?acc:cuc
// })
// console.log(result);


//callback

// function display(name,callback){
//     console.log('MY name is'+' '+name);
//     callback()
// }

// function great(){
//     console.log('This is a callback function');
// }
// display('vijay',great)

//closure

// function outer(){
//     var a=10;
//     var b=20;
//     function inside(){
//         var sum=a+b;
//         console.log(sum);
//     }
//     return inside
// }

// let cal=outer()
// cal()


// callapplybind


// const person={
//     name:'Akhildas',
//     age:23,

// }

// function display(place,job){
//     console.log(`My name is ${this.name} I am from ${place} I am a ${job}`);
// }

// display.call(person,'kochi','developer')
// display.apply(person,['Alappuzha','Developer'])
// const del=display.bind(person,'dubai','Software');

// del()


// shallowcopy


// const profile={
//     name:'Akhildas',
//     age:23,
//     address:{
//         place:'Ernakulam',
//         state:'Kerala'
//     }
// }

// const user=Object.assign({},profile);

// user.name='Martin';
// user.age=25;
// user.address.place='Chennai';
// user.address.state='Tamilnadu'

// console.log(profile);
// console.log(user);


// const profile={
//     name:'Akhildas',
//     age:24,
//     address:{
//         place:'Ernakulam',
//         state:'kerala',
//     }
// }


// const user=JSON.parse(JSON.stringify(profile))
// user.name='john';
// user.address.place='Chennai',
// user.address.state='Tamilnadu'
// console.log(profile);
// console.log(user);



// palindrome

// const str='malayalam'

// let result='';

// for(let i=str.length-1;i>=0;i--){
//     result+=str[i]
// }

// if(str===result){
//     console.log(str+' is a palindrome');
// }else{
//     console.log(str+' is not palindrome');
// }

// string reverse

// let str='today is my review';
// let result='';
// let word=str.split(' ')
// for(let i=0;i<word.length;i++){
//     word[i]=word[i].split('').reverse('').join('')

// }


// result+=word.join(' ');
// console.log(result);



// const orr=[[[{a:1,b:3}]]]

// let h=orr[0][0][0].a;
// let i=orr[0][0][0].b
// console.log(h+i);



// const obj={a:10,b:20}
// let result=Object.values(obj).reduce((acc,cuc)=>{
//     return acc=acc+cuc
// })
// console.log(result);

// const arr=[1,2,3,4,5,6,7]

// arr.filter(num=>{
//     console.log(num*num);
// })

// const array=[1,2,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6]

// var count=0;
// var max=0;


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
// console.log(value+' repeated in '+ max+' times');

let ad=[{a:3},{b:[10,20]},{c:5},{d:[20,50]}]

// let one=ad[0].a
// // console.log(one);

// let two=ad[1].b
// // console.log(two);

// let three=ad[2].c
// console.log(three);

// let four=ad[3].d
// console.log(four);
// const result=two.reduce((acc,cucc)=>{

//     acc=acc+cucc
//     return acc
// })
// console.log(result);

// let merge=two.concat(four)
// console.log(merge);
// let sum=result+one;
// console.log(sum);


let totalSum = 0;

for(let i=0;i<ad.length;i++){
    for(let key in ad[i]){
        if(Array.isArray(ad[i][key])){
            totalSum+=ad[i][key].reduce((acc,cucc)=>acc+cucc,0)

        }else{
            totalSum+=ad[i][key]
        }
    }
}
console.log(totalSum);




//currying

// function a(num1){
//     return function b(num2){
//         return function c (num3){
//             return num1+num2+num3

//         }
//     }
// }
// console.log(a(20)(30)(40));




// let arr=[2,4,1,2,3]
// let arr2=[1,9,0,1,2,5,7,8,2,3,2,4,3]


// function sum4(arr,arr2){
// var value=[]
                                                        
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr[i]+arr2[j]==4){
// value.push([arr[i],arr2[j]])
//         }
//     }
// }
// return value

// }
// let result=sum4(arr,arr2)
// console.log(result);

