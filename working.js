let arr=[1,2,3,4,5,6,7,8]

let result=arr.reduce((acc,cuc)=>{
   acc=acc+cuc
   return acc
})
console.log(result);


let result1=arr.map((x)=>{
   return x*2
})

console.log(result1);
