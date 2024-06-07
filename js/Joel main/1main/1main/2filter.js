
//filter odd numbers


const arr = [5,1,3,2,6];
// function isOdd(x){
//     return x/2!=0
// }

// const output = arr.filter(isOdd)

// console.log(output);

let r = arr.filter((x)=>{
    return x/2!=0
}).reduce((acc,curr)=>{
    acc=acc+curr
    return acc
})
console.log(r);


// filtering the even values and its sum

const array = [100,300,500,10,111]

// function isitEven(y){
//     return y%2==0
// }
// const out = array.filter(isitEven).reduce(function(acc,curr){
//     acc=acc+curr
//     return acc;
// },0)
// console.log(out);



function isod(y){
    return y*2
}
const out = array.filter(isod).reduce(function(acc,curr){
    acc=acc+curr
},0)

console.log(out)

// // greater than 1000 

// function greaT (m){
//     return m<1000;

// }
// const outer = array.filter(greaT)
// console.log(outer)

