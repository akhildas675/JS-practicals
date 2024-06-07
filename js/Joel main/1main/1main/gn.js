


// function* fun(a, b) {
//     yield a + b;
//     yield b - a;
//     yield b / a;
// }

// Calling the Generate Function 
// let gen = fun(10, 20);
// console.log(gen.next(1));
// console.log(gen.next(2));
// console.log(gen.next(4222));

// console.log(gen.next().value);







function* abc(){

    yield 13;
    yield 10;
    yield 14;

}


const result = abc()
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());



function* ar() {

    var n=0
    while(true){
        yield n++
    }

    }
  
    // let result1 = ar();
//   console.log(...result);
//   console.log(result1.next().value);
//   console.log(result1.next().value);
//   console.log(result1.next().value);
//   console.log(result1.next().value);
//   console.log(result.next());



function 