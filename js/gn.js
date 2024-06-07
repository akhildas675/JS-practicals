// function* a(){
//     for(let i=1;i<=10;i++){
//         yield i
//     }
// }
// const gen=a()


// for(let i=1;i<=10;i++){
//     console.log(gen.next().value);
// }



function* display(){
    yield a={name:"akhildas"}
    yield b={name:"avinadh"}
    yield c={name:"joel"}

}


const gen=display();
gen.next();
gen.next();
console.log(gen.next().value);
console.log(gen.next());


