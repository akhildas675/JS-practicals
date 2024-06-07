// function higherOrder(fn){
//     fn()
// }

// higherOrder(function(){
//     console.log("hello");
// })

function higherOrder2() {
    return function() {
        console.log('do something');
    }
  }      
  var x = higherOrder2();
x()