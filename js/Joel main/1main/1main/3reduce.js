// arrow function cheyanam

const arr = [30, 30 , 23 , 10, 50];

//sum of max ...

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr));




// filtering the even values and its sum

const array = [100,300,500,10,111]

function isitEven(y){
    return y%2==0
}
const out = array.filter(isitEven).reduce(function(acc,curr){
    acc= acc*curr
    return acc
},1)
console.log(out);


// do one with only reduce 