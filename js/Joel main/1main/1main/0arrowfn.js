
function fun1(){
    console.log("good night");
}

var fun2 = (() => console.log("good morning"))
// console.log(fun2());
// fun2();

// -------------------------------
let myf = (d) =>console.log(d * d * d)
// myf(5);             //235

// sum of 2 numbers in normal function

// var x;
// var y;
// function add(x,y){
//  console.log(x+y)
// }
// add(10,30)


// //sum of 2 numbers arrow function
//  let sums = (x, y) => console.log(x + y);
//  sums(20, 60);


// -------------------------------------------------------------------------------------------------------------


                             // this keyword difference with functions

myObj = {
    a:100,
    b:200,
    fun:function(){
        console.log(this.a+this.b);                    
    }

}
myObj.fun()                                           //300      this gives whats inside the parent of fun()
// console.log(myObj.fun());       //300 not defined


// ------------------------------------

myObj = {
    a:100,
    b:200,
    fun:()=>{
        console.log(this.a+this.b);
    }

}
myObj.fun()                                              //NaN
// console.log(myObj.fun());

// --------------------------------------------------------------------------------------



myObj = {
    a:100,
    b:200,
    fun:function(){
        console.log(this);
    }

}
var aa = myObj.fun                                  
// aa()                                              //global

// -----------------------------------------



function regularFunction() {
    console.log(this);
  }
  
//   regularFunction();   // global


  var  regularFunction1=()=> {
    console.log(this);
  }

//   regularFunction1();       // empty why