//for in loop


// let value={a:10,b:20,c:30}
// let sum=0;
// for(let x in value){
//    sum+=value[x]
// }
// console.log(sum);


// let obj={name:'Akhil',age:23,place:'Palakkad'}

// for(let x in obj){
//     console.log(x+' : '+obj[x]);
// }


// let obj={name:'Akhil',age:23,place:'Palakkad'}
// let count=0
// for(let x in obj){
//     count++

// }
// console.log(count);


// function checkProperty(){

// }

let obj={a:10,b:20,c:30,c:50,d:40}
// let obj1={a:11,b:20,c:32,d:40,c:50}
// const common={}

// for(let x in obj){
//     if(obj1.hasOwnProperty(x)){
//          common[x]=[obj[x],obj1[x]]
//     }
// }

// console.log(common);

// let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
// let obj1 = { a: 11, b: 20, c: 32, d: 30, f: 50 };

// for(let key  in obj){
//     if(obj1.hasOwnProperty(key) && obj[key]===obj1[key]){
//         console.log('key '+key+" value "+obj[key]);
//     }
// }

 
// let ad=[{a:3},{b:[10,20]},{c:5},{d:[20,50]}]

// let sum=0;

let y=0
for(let x in obj){
    if(y<obj[x]){
y=obj[x]
    }
}
console.log(y);


