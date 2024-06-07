//implicit corecion

// console.log("3"+3);
// console.log("3"-2)

//Explict 

// let arr=[1,3,34,4]

// console.log(arr.toString());


//do while

// let i=0;
// do{
//     console.log(i);
//     i++
// }while(i<=10)

    //while

    // let i=0;
    // while(i<10){
    //     i++
    //     console.log(i);
    // }


    //higherorder function

   // function as passing an argument

    // function display(fn){
    //     fn()
    // }

    // display(function(){console.log("hello");})



    //function as an return 

    // function display(){
    //     return function(){
    //         console.log("hello");
    //     }
    // }0
    // const x=display()
    // x()


    //call apply bind()


//     const person={
//         name:"akhil"
//     }

//     function display(place){
//         console.log(`hello I am ${this.name} I am from ${place}`);
//     }

//     display.call(person,"palakkad")
//     display.apply(person,['Thrissur'])
//     let user=display.bind(person,"Kochi")
// user()
    

//currying 

// function display(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(display(10)(20)(30));


//closure

// function display(){
//     let y=20;
//     let x=30;
    
//     function z(){
//         console.log(x+y);
    
//     }
// z()
// }
// display()



//call back


// function display(name,callback){
//     console.log("hai I am "+name);
//     callback()
// }
// function show(value){
// console.log("This is the callback function "+ value);
// }
// display("akhildas",()=>show(23))

//IIFE

// (function(){
//     setTimeout(() => {
//         console.log("this is iife");
//     },5000);
// })();

