//map

// const arr=[1,2,3,4,5,6]

// let out=arr.map((num)=>{
//     return num*num
// })

// console.log(out);

//map function

// const arr=[1,2,3,4,5]

// function add(num){
//     return num*num
// }
// let out=arr.map(add)
// console.log(out);

//-------------------------------------------------------------

//filter

// const arr=[1,2,3,4,5]

// let out=arr.filter((num)=>{
//     return num%2==0
// })
// console.log(out);

//filter function

// const arr=[1,2,3,4,5]

// function even(num){
//     return num%2==0
// }

// let out=arr.filter(even)
// console.log(out);

//-----------------------------------------------------

//reduce

// const arr=[1,2,3,4,5]

// let out=arr.reduce((acc,cuc)=>{
//     acc=acc+cuc;
//     return acc
// })

// console.log(out);

//reduce function

// const arr=[1,2,3,4,5]

// function sum(num){
//     return num
// }

// let out=arr.reduce(function(acc,cuc){
//     acc=acc+cuc
//     return acc
// })
// console.log(out);

//----------------------------------------------------------

//spread

// let student={
//     name:"akhildas",
//     place:"palakkad",
//     age:18
// }

// let student2={

//     ...student
// }

// console.log(student2);

//----------------------------------------------------------------

//promise

// const promise= new Promise((resolve,reject)=>{
//     resolve("success")
// })

// promise.then((res)=>{
//     console.log(res);
// })

// const promise1=new Promise((_res,rej)=>{
//     rej("Failed")
// })

// promise1.then((rej)=>{
//     console.log(rej);
// })

// .catch((rej)=>{
//     console.log(rej);
// })
//-----------------------------------------------------

//settimeout

// setTimeout(()=>{
//     console.log("hai");
// },3000)

//------------------------------------------------

//call back

// function add(funcal){
//     console.log("helooo");

//     funcal();
// }

// add(function(){
//     console.log("hai");
// });

//----------------------------------------------------------
//currying

function add(num1){
    return function(num2){
        return function(num3){
                return num1+num2+num3

            }
        }
    }
console.log(add(100)(200)(300));

//----------------------------------------------------------------

//foreach

// const arr=[1,2,3,4,5]

// sum=0;
// arr.forEach((value,index)=>{
//     sum=sum+value
//     return sum
// })

// console.log(sum);

//--------------------------------------------------------------------

//Optional changing

// let student={

//     name:"akhildas",
//     id:8768968,
//     place:"palakkad"
// }
// let check=student?.id
// console.log(check);

//--------------------------------------------------------------------

//Ternary OPreator

// var num=10
// var num2=20;

// num<num2?console.log("Wrong"):console.log("right");

//----------------------------------------------------------------

//closure

// function display(){
//     var num=10+20
//     function check(){
//         console.log(num);
//     }
//     check();
// }

// display();

//---------------------------------------------

//Hoisting
// console.log(num);

// num=100

// var num

//------------------------------------------------------

//splice&slice
// const arr = ["mango", "apple", "orange", "Grape"];

// let out = arr.slice(0, 4, "banana");
// console.log(out);

//-----------------------------------

//shallow copay and deep copy



//-----------------------------------------------------------

// call apply bind

// const student = {
//   name: "Akhil",

//   getname(lastname) {
//     console.log(`${this.name} ${lastname}`);
//   },
// };

// const person = {
//   name: "Thalapathy",
// };

// student.getname.call(student, "das");
// student.getname.apply(person, ["vijay"]);
// let bindcal = student.getname.bind(person, "Joseph Vijay");
// bindcal();

//----------------------------------------------------------

//set

// const arr=[1,2,2,4,5,3,4,5,6]

// let unique= new Set(arr)
// console.log(unique);

//callback hell

// function create(caling){
//     const data= {
//         name:'Jhon',
//     };
//     caling(data);
// }

// function adding(data,caling){
//     add=`Helo ${data.name}How are you...?`;
//     caling(add)
// }

// function display(){
//     create((data)=>{
//         adding(data,(add)=>{
//             console.log(add);
//         });
//     });
// }
// display();

// ---------------------------------------------------------------------
//call back hell

// function create(caling){
//     const data={
//         name:'Jhon',
//     };
//     caling(data);
// }

// function adding(data, caling){
//     const print=`Hello ${data.name} how are you?`;
//     caling(print);
// }

// function display(){
//     create((data)=>{
//         adding(data,(print)=>{
//             console.log(print);
//         });
//     });
// }

// display();
