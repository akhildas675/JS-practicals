//even number converted into Zero;

const arr=[1,2,3,4,5,6,7,8]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr[i]=0
    }else{
        arr[i]=1
    }
}
console.log(arr);

//=========================================================== map

// const arr=[1,2,3,4,5,6,7]

// const result=arr.map(num=>num*num)
// console.log(result);

//============================================================ reduce

// const arr=[1,2,3,4,5,6,7,8]

// const result=arr.reduce((acc,cuc)=>{
//     return acc=acc+cuc
// })
// console.log(result);

//largest value in array

// const result=arr.reduce((acc,cuu)=>acc<cuu?acc:cuu)
// console.log(result)

//========================================================== Filter

// const arr=[1,2,3,4,5,6,7,8]

// const result=arr.filter((num)=>{
//     return num%2==0
// })
// console.log(result);

//============================================================== foreach
// const arr=[1,2,3,4,5,6,7,8]
// let sum=0;

// const result=arr.forEach(element => {
//     sum=sum+element;
// });
// console.log(result);

//============================================================== Below age members in this object

// const users=[{firstname:'Akhil',lastname:'das',age:23},
// {firstname:'Jospeh',lastname:'Vijay',age:49},
// {firstname:'Miles',lastname:'Morals',age:19}
// ];

//Method 1;

// let value=users.filter((x)=>{
//     if(x.age<30)
//     return x
// })
// console.log(value);

//Method 2

// const result=users.filter((x)=>x.age<30).map((x)=>x.firstname+x.lastname)

// console.log(result);

//Method 3

// const result=users.reduce((acc,cuc)=>{
//     return cuc.age > acc.age ? cuc:acc;

// })
// console.log(result);

//============================================================== Genrative function

// function* display(){
//     let a=10;
//     b=13;
//     yield a+b;
// yield a*b;

// }

// const gen=display();

// console.log(gen.next().value)
// console.log(gen.next().value);
// console.log(gen.next().done);

//sorting in loop==========================
// const arr=[1,1,3,5,5]
// const arr1=[2,4,4,6,6]

// let result=[...arr,...arr1]
// for(let i=0;i<result.length;i++){
//     for(let j=0;j<result.length;j++){

//         if(result[i]<result[j]){
//             let temp=result[i];
//             result[i]=result[j]
//             result[j]=temp;
//         }

//     }
// }
// for(let i=0;i<result.length;i++){
//     console.log(result[i]);
// }

// const arr = [1, 1, 3, 5, 5];
// const arr1 = [2, 4, 4, 6, 6];

// let result = [...arr, ...arr1];
// for (let i = 0; i < result.length; i++) {
//     for (let j = 0; j < result.length; j++) { // Corrected the loop condition
//         if (result[i] < result[j]) {
//             let temp = result[i];
//             result[i] = result[j];
//             result[j] = temp;
//         }
//     }
// }

// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]); // Corrected the output statement
// }
// var a =10;
// {

//     // console.log(a);
//     let a=20
//     console.log(a);
// }

//call back hellll


// function first(callback){
//     setTimeout(() => {
//         const data={
//             name:'Akhildas',
//     place:'Kochi',
// }
// callback(data)
//     },3000);
// }

// function second(data,callback){
//     setTimeout(() => {
//         const pass=`My name is ${data.name},I am fromo ${data.place}`
//         callback(pass)
//     }, 1000);
// }

// function display(){
//     first((data)=>{
//         second(data,(pass)=>{
//             console.log(pass);
//         })
//     })
// }
// display();



//Promise async await


// function first(){
//     return new Promise ((resolve,reject)=>{
//         resolve('First promise Success')
//     })
// }

// function second(){
//     return new Promise((resolve,reject)=>{
//         reject('Second promise reject')
//     })
// }


// async function display(){


//     try{
//         const user1= await first();
//         console.log(user1);

//         const user2=await second();
//         console.log(user2);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// display()

//shallow copy and deep copy



//shallow
// const profile={
//     name:'Akhildas',
//     age:23,
//     address:{
//         Place:'Kochi'
//     }
// }

// const user=Object.assign({},profile)
// user.name='Miles';
// user.address.Place='Brooklyn'
// console.log(profile);
// console.log(user);


// deepcoy

// const profile={
//     name:'Akhildas',
//     age:25,
//     address:{
//         place:'Palakkad'
        
//     } 
// }

// const user=JSON.parse(JSON.stringify(profile))

// user.name='miles';
// user.address.place='Brooklyn'

// console.log(profile)
// console.log(user);

