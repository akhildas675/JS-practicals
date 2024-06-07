function x(y) {
    console.log("hey joel");
    y()
}
x(function () {
    console.log("anony called"); // callback
})




function display(a, anjith) {
    console.log(a);
    anjith()
}
display(10, function name() {   // function display aan higher order function / argument ayi pass chetha function name CB
    console.log("hai anjith");
})



function display(a, b) {
    console.log(a);
    b()
}



display(1, function a() {
    console.log("hai vishnu gr");
})





function doge(abhilash,){

}


// date

// const date = new Date()
// console.log(date);





// var hello=function(data){
//     console.log('data'+data)
// }

// var hey=function(callback){  //callback

//     callback('joelfrancis')
// }

// hey(hello)





// let x =10
// let x = 11
// console.log(x);



function* a(){

    let max= 10;
    while(max<10){
        var n=1;
        n++
        yield n;
    }

}
 let result =a()
// console.log(result.next());


// function* a() {
//     let max = 10;
//     while (max > 0) {
//       var n = 1;
//       n++;
//       yield n;
//       max--;
//     }
//   }
  
//   let result = a();
//   console.log(...result);
// console.log(result.next());
  

function Amritha(a,ambadan){

    console.log(a)

    ambadan()

}





Amritha(10,function ambu(){
    console.log("Midhun Ambadan")
})


// A function which takes another function as argument
// Function that is passed on as argument to another function is called callback function.






function doge(a,z){

    console.log(a);
    z()
}

doge(1,function (){
    console.log('hey');
})